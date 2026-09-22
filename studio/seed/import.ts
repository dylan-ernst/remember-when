// Loads seed/content.ts into the configured Sanity dataset.
// Run from the studio folder: npm run seed
// Only creates documents that do not exist yet, so edits made in Studio are kept.
// To wipe edits and restore the seed exactly: npm run seed -- --replace
// Sanity dedupes identical image uploads, so re-running does not duplicate assets.
import { createReadStream } from 'node:fs'
import { randomUUID } from 'node:crypto'
import path from 'node:path'
import { getCliClient } from 'sanity/cli'
import * as seed from './content'
import type { SeedImage } from './content'

const client = getCliClient({ apiVersion: '2025-01-01' })
// The site's own photos are the starting library, so nothing is duplicated on disk.
const imagesDir = path.join(process.cwd(), '..', 'src', 'assets', 'photos')

const uploaded = new Map<string, string>()

async function uploadAsset(file: string): Promise<string> {
  const cached = uploaded.get(file)
  if (cached) return cached

  const asset = await client.assets.upload('image', createReadStream(path.join(imagesDir, file)), {
    filename: file,
  })
  console.log(`  uploaded ${file}`)
  uploaded.set(file, asset._id)
  return asset._id
}

async function image({ file, alt }: SeedImage) {
  return {
    _type: 'imageWithAlt',
    asset: { _type: 'reference', _ref: await uploadAsset(file) },
    alt,
  }
}

const withKey = <T extends object>(item: T) => ({ _key: randomUUID().slice(0, 12), ...item })

async function main() {
  const { siteSettings, homePage, aboutPage, servicesPage, contactPage } = seed
  const replace = process.argv.includes('--replace')
  console.log(
    `Seeding ${client.config().projectId}/${client.config().dataset} (${
      replace ? 'replacing everything' : 'missing documents only'
    })`,
  )

  const docs = [
    { _id: 'siteSettings', _type: 'siteSettings', ...siteSettings, socials: siteSettings.socials.map(withKey) },
    {
      _id: 'homePage',
      _type: 'homePage',
      ...homePage,
      events: await Promise.all(
        homePage.events.map(async ({ name, image: photo }) =>
          withKey({ _type: 'eventCard', name, image: await image(photo) }),
        ),
      ),
      manifesto: { ...homePage.manifesto, image: await image(homePage.manifesto.image) },
      packages: homePage.packages.map((pack) => withKey({ _type: 'packageCard', ...pack })),
      gallery: await Promise.all(homePage.gallery.map(async (photo) => withKey(await image(photo)))),
      testimonials: homePage.testimonials.map((quote) => withKey({ _type: 'testimonial', ...quote })),
      aboutTeaser: { ...homePage.aboutTeaser, image: await image(homePage.aboutTeaser.image) },
    },
    {
      _id: 'aboutPage',
      _type: 'aboutPage',
      ...aboutPage,
      hero: { ...aboutPage.hero, image: await image(aboutPage.hero.image) },
      band: { ...aboutPage.band, image: await image(aboutPage.band.image) },
    },
    {
      _id: 'servicesPage',
      _type: 'servicesPage',
      ...servicesPage,
      hero: { ...servicesPage.hero, image: await image(servicesPage.hero.image) },
      tiers: servicesPage.tiers.map((tier) => withKey({ _type: 'tier', ...tier })),
      band: { ...servicesPage.band, image: await image(servicesPage.band.image) },
      addons: await Promise.all(
        servicesPage.addons.map(async ({ image: photo, ...rest }) =>
          withKey({ _type: 'addon', ...rest, image: await image(photo) }),
        ),
      ),
    },
    {
      _id: 'contactPage',
      _type: 'contactPage',
      ...contactPage,
      hero: { ...contactPage.hero, image: await image(contactPage.hero.image) },
      featureImage: await image(contactPage.featureImage),
    },
  ]

  const existing = new Set(
    await client.fetch<string[]>('*[_id in $ids]._id', { ids: docs.map((doc) => doc._id) }),
  )
  const toWrite = replace ? docs : docs.filter((doc) => !existing.has(doc._id))

  const transaction = client.transaction()
  for (const doc of toWrite) transaction.createOrReplace(JSON.parse(JSON.stringify(doc)))
  await transaction.commit()
  console.log(`Done: ${toWrite.length} written, ${docs.length - toWrite.length} left as they were.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
