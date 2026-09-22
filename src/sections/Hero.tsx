import { Link } from 'react-router-dom'
import heroVideo from '../assets/video/hero-booth.mp4'
import heroVideoWide from '../assets/video/hero-booth-wide.mp4'
import type { HomeContent, SiteSettings } from '../content/types'
import { useIsMobile } from '../hooks/useMediaQuery'
import { telHref } from '../lib/phone'
import styles from './Hero.module.css'

type HeroProps = {
  hero: HomeContent['hero']
  settings: SiteSettings
}

/**
 * The logo animation is the hero at every width: a portrait cut on phones and
 * the wide cut above the mobile breakpoint. Both are brand animations rather
 * than page content, so they ship with the site instead of living in Studio.
 * The video is held by a fixed layer rather than a scroll handler, and the copy
 * carries its own gradient up over it, so it stays readable at any scroll
 * position.
 */
export function Hero({ hero, settings }: HeroProps) {
  const isMobile = useIsMobile()
  const videoSrc = isMobile ? heroVideo : heroVideoWide

  return (
    <section className={styles.hero}>
      <div className={styles.videoLayer}>
        {/* Keyed on the source so switching breakpoints reloads the right cut. */}
        <video
          key={videoSrc}
          className={styles.video}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className={styles.content} data-reveal="600">
        {/* The animation ends on the wordmark, so the heading is for screen
            readers and search engines only. */}
        <h1 className={styles.headline}>
          {hero.headlineLead}
          <span className={styles.headlineAccent}>{hero.headlineAccent}</span>
        </h1>
        <p className={styles.blurb}>{hero.blurb}</p>
        <div className={styles.actions}>
          <Link to="/contact" className={styles.cta}>
            {hero.ctaLabel}
          </Link>
          <a href={telHref(settings.phone)} className={styles.phone}>
            Call or text {settings.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
