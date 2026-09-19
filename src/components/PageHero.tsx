import { useCallback, useRef } from 'react'
import { clamp01, useScrollDriven } from '../hooks/useScrollDriven'
import styles from './PageHero.module.css'

type PageHeroProps = {
  eyebrow: string
  title: string
  lead?: string
  image: string
  alt: string
  /* Page module class carrying the height and crop custom properties. */
  className?: string
}

/** The photo banner every inner page opens with. */
export function PageHero({ eyebrow, title, lead, image, alt, className }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const update = useCallback(() => {
    const section = sectionRef.current
    const image = imageRef.current
    if (!section || !image) return

    const progress = clamp01(-section.getBoundingClientRect().top / window.innerHeight)
    image.style.transform = `scale(${1.05 + progress * 0.28}) translateY(${progress * 40}px)`
  }, [])

  useScrollDriven(update)

  return (
    <section ref={sectionRef} className={className ? `${styles.hero} ${className}` : styles.hero}>
      <img ref={imageRef} className={styles.image} src={image} alt={alt} />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <p className={styles.eyebrow} data-reveal="0">
          {eyebrow}
        </p>
        <h1 className={styles.title} data-reveal="100">
          {title}
        </h1>
        {lead && (
          <p className={styles.lead} data-reveal="200">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
