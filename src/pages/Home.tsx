import { useRef } from 'react'
import { ContentStatus } from '../components/ContentStatus'
import { AboutIntro } from '../sections/AboutIntro'
import { EventGrid } from '../sections/EventGrid'
import { GalleryMarquee } from '../sections/GalleryMarquee'
import { Hero } from '../sections/Hero'
import { SocialBanner } from '../sections/SocialBanner'
import { Manifesto } from '../sections/Manifesto'
import { Packages } from '../sections/Packages'
import { Testimonials } from '../sections/Testimonials'
import type { SiteSettings } from '../content/types'
import { useContent } from '../content/useContent'
import { useRevealGroup } from '../hooks/useRevealGroup'
import styles from './Home.module.css'
import { usePageTitle } from '../hooks/usePageTitle'

export function Home({ settings }: { settings: SiteSettings }) {
  const pageRef = useRef<HTMLDivElement>(null)
  const content = useContent('home')
  useRevealGroup(pageRef)
  usePageTitle(`${settings.name} | Orange County Photo Booth Rentals`)

  if (content.status !== 'ready') return <ContentStatus {...content} />
  const home = content.data

  return (
    <div ref={pageRef}>
      <Hero hero={home.hero} settings={settings} />
      <div className={styles.belowHero}>
        <EventGrid eventsIntro={home.eventsIntro} events={home.events} />
        <Manifesto manifesto={home.manifesto} />
        <Packages packagesIntro={home.packagesIntro} packages={home.packages} />
        <GalleryMarquee gallery={home.gallery} />
        <Testimonials
          testimonialsHeading={home.testimonialsHeading}
          testimonials={home.testimonials}
        />
        <AboutIntro aboutTeaser={home.aboutTeaser} />
        <SocialBanner label={home.followLabel} settings={settings} />
      </div>
    </div>
  )
}
