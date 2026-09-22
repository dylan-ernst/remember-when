import { useCallback, useRef } from 'react'
import type { ReactNode } from 'react'
import type { SiteImage } from '../content/types'
import { clamp01, useScrollDriven } from '../hooks/useScrollDriven'
import { focalStyle, sizedUrl } from '../lib/images'
import styles from './ParallaxBand.module.css'

const MOBILE_MAX_WIDTH = 859

type ParallaxBandProps = {
  image: SiteImage
  /* Page module class carrying the height, scrim and crop custom properties. */
  className?: string
  /** Backdrop travel across the whole band, in px. */
  drift?: number
  driftMobile?: number
  /** Backdrop zoom: base at the top of the band, plus range by the bottom. */
  scaleBase?: number
  scaleRange?: number
  children: ReactNode
}

/**
 * Sticky full-bleed band: the backdrop drifts while the line inside fades up,
 * peaks, and fades away again as the band passes through the viewport.
 */
export function ParallaxBand({
  image,
  className,
  drift = 120,
  driftMobile = 35,
  scaleBase = 1.12,
  scaleRange = 0.1,
  children,
}: ParallaxBandProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const update = useCallback(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const text = textRef.current
    if (!section || !image || !text) return

    const viewportHeight = window.innerHeight
    const rect = section.getBoundingClientRect()
    const progress = clamp01((viewportHeight - rect.top) / (viewportHeight + rect.height))
    const travel = window.innerWidth <= MOBILE_MAX_WIDTH ? driftMobile : drift

    image.style.transform = `translateY(${(progress - 0.5) * travel}px) scale(${
      scaleBase + progress * scaleRange
    })`
    text.style.opacity = String(Math.max(0, 1 - Math.abs(progress - 0.55) * 2.2))
    text.style.transform = `translateY(${(0.55 - progress) * 90}px) scale(${
      0.8 + clamp01((progress - 0.25) / 0.5) * 0.45
    })`
  }, [drift, driftMobile, scaleBase, scaleRange])

  useScrollDriven(update)

  return (
    <section
      ref={sectionRef}
      className={className ? `${styles.section} ${className}` : styles.section}
    >
      <div className={styles.sticky}>
        <img
          ref={imageRef}
          className={styles.image}
          src={sizedUrl(image.url, 2400)}
          alt={image.alt}
          style={focalStyle(image)}
          loading="lazy"
        />
        <div className={styles.scrim} />
        <div ref={textRef} className={styles.text}>
          {children}
        </div>
      </div>
    </section>
  )
}
