import { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark.png'
import { hero } from '../content/home'
import { site } from '../content/site'
import { useIsMobile } from '../hooks/useMediaQuery'
import { clamp01, useScrollDriven } from '../hooks/useScrollDriven'
import styles from './Hero.module.css'

export function Hero() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const update = useCallback(() => {
    const section = sectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()

    /* The still hero pushes into the page as it scrolls away. */
    const image = imageRef.current
    if (image) {
      const progress = clamp01(-rect.top / window.innerHeight)
      image.style.transform = `scale(${1.05 + progress * 0.28}) translateY(${progress * 40}px)`
    }

    /* The video stays put instead: it is pushed down by exactly the distance
       scrolled, so the copy and the next section slide up over it. The hero's
       own overflow clips it once the section has gone by. */
    const video = videoRef.current
    if (video) {
      const held = Math.min(Math.max(-rect.top, 0), rect.height)
      video.style.transform = `translate(-50%, -50%) translateY(${held}px)`
    }
  }, [])

  useScrollDriven(update)

  const headline = (
    <>
      {hero.headlineLead}
      <span className={styles.headlineAccent}>{hero.headlineAccent}</span>
    </>
  )

  const actions = (
    <>
      <Link to={hero.ctaTo} className={styles.cta}>
        {hero.ctaLabel}
      </Link>
      <a href={site.phone.href} className={styles.phone}>
        Call or text {site.phone.display}
      </a>
    </>
  )

  if (isMobile) {
    return (
      <section ref={sectionRef} className={`${styles.hero} ${styles.heroMobile}`}>
        <video
          ref={videoRef}
          className={styles.video}
          src={hero.video}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
        <div className={styles.scrimMobile} />
        <div className={styles.contentMobile} data-reveal="600">
          <h1 className={styles.headlineMobile}>{headline}</h1>
          <p className={styles.blurbMobile}>{hero.blurb}</p>
          <div className={styles.actionsMobile}>{actions}</div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className={styles.hero}>
      <img ref={imageRef} className={styles.image} src={hero.image} alt={hero.imageAlt} />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <img className={styles.mark} src={logoMark} alt="" data-reveal="0" />
        <h1 className={styles.headline} data-reveal="120">
          {headline}
        </h1>
        <p className={styles.blurb} data-reveal="240">
          {hero.blurb}
        </p>
        <div className={styles.actions} data-reveal="360">
          {actions}
        </div>
      </div>
    </section>
  )
}
