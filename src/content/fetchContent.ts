import { createClient, type SanityClient } from '@sanity/client'
import { queries } from './queries'
import type { ContentKey, ContentMap } from './types'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

let client: SanityClient | null = null

function getClient(): SanityClient {
  // Public dataset read through the CDN: no token ships to the browser
  client ??= createClient({ projectId, dataset, apiVersion: '2025-01-01', useCdn: true })
  return client
}

export async function fetchContent<K extends ContentKey>(key: K): Promise<ContentMap[K]> {
  if (!projectId) {
    throw new Error('VITE_SANITY_PROJECT_ID is not set for this build.')
  }

  const result = await getClient().fetch<ContentMap[K] | null>(queries[key])
  if (result == null) throw new Error(`No "${key}" content has been published yet.`)

  // Temporary correction until the Keepsakes content is updated in Sanity.
  // Match only the old values so subsequent CMS changes remain effective.
  if (key === 'home' && 'packages' in result) {
    result.packages = result.packages.map((pkg) =>
      pkg.name === 'Keepsakes' && pkg.price === '$675' ? { ...pkg, price: '$625' } : pkg,
    )
  }
  if (key === 'services' && 'tiers' in result) {
    result.tiers = result.tiers.map((tier) =>
      tier.name === 'Keepsakes'
        ? {
            ...tier,
            price: tier.price === '$675' ? '$625' : tier.price,
            basedOn:
              tier.basedOn === 'EVERYTHING IN SIGNATURE, PLUS PICK 2:'
                ? 'EVERYTHING IN SIGNATURE, PLUS PICK 1:'
                : tier.basedOn,
          }
        : tier,
    )
  }
  return result
}
