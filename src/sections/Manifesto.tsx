import { useCallback, useRef } from 'react'
import { manifesto } from '../content/home'
import { clamp01, useScrollDriven } from '../hooks/useScrollDriven'
import styles from './Manifesto.module.css'

/* Drift distance for the backdrop, in px of travel across the whole section. */
const DRIFT_DESKTOP = 120
const DRIFT_MOBILE = 35
const MOBILE_MAX_WIDTH = 859

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  /* The backdrop drifts while the line fades up, peaks, and fades away again. */
  const update = useCallback(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const text = textRef.current
    if (!section || !image || !text) return

    const viewportHeight = window.innerHeight
    const rect = section.getBoundingClientRect()
    const progress = clamp01((viewportHeight - rect.top) / (viewportHeight + rect.height))
    const drift = window.innerWidth <= MOBILE_MAX_WIDTH ? DRIFT_MOBILE : DRIFT_DESKTOP

    image.style.transform = `translateY(${(progress - 0.5) * drift}px) scale(${1.12 + progress * 0.1})`
    text.style.opacity = String(Math.max(0, 1 - Math.abs(progress - 0.55) * 2.2))
    text.style.transform = `translateY(${(0.55 - progress) * 90}px) scale(${
      0.8 + clamp01((progress - 0.25) / 0.5) * 0.45
    })`
  }, [])

  useScrollDriven(update)

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        <img
          ref={imageRef}
          className={styles.image}
          src={manifesto.image}
          alt={manifesto.imageAlt}
          loading="lazy"
        />
        <div className={styles.scrim} />
        <div ref={textRef} className={styles.text}>
          <p className={styles.line}>
            {manifesto.lead}
            <span className={styles.accent}>{manifesto.accent}</span>
            {manifesto.trail}
          </p>
        </div>
      </div>
    </section>
  )
}
