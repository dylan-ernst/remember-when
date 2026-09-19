import { useRef } from 'react'
import { AboutIntro } from '../sections/AboutIntro'
import { EventGrid } from '../sections/EventGrid'
import { GalleryMarquee } from '../sections/GalleryMarquee'
import { Hero } from '../sections/Hero'
import { InstagramBanner } from '../sections/InstagramBanner'
import { Manifesto } from '../sections/Manifesto'
import { Packages } from '../sections/Packages'
import { Testimonials } from '../sections/Testimonials'
import { useRevealGroup } from '../hooks/useRevealGroup'
import styles from './Home.module.css'
import { usePageTitle } from '../hooks/usePageTitle'

export function Home() {
  const pageRef = useRef<HTMLDivElement>(null)
  useRevealGroup(pageRef)
  usePageTitle('Remember When Photo Booth | Orange County Photo Booth Rentals')

  return (
    <div ref={pageRef}>
      <Hero />
      <div className={styles.belowHero}>
        <EventGrid />
        <Manifesto />
        <Packages />
        <GalleryMarquee />
        <Testimonials />
        <AboutIntro />
        <InstagramBanner />
      </div>
    </div>
  )
}
