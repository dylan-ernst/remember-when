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

export function Home() {
  const pageRef = useRef<HTMLDivElement>(null)
  useRevealGroup(pageRef)

  return (
    <div ref={pageRef}>
      <Hero />
      <EventGrid />
      <Manifesto />
      <Packages />
      <GalleryMarquee />
      <Testimonials />
      <AboutIntro />
      <InstagramBanner />
    </div>
  )
}
