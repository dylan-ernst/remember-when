import { Link } from 'react-router-dom'
import type { HomeContent } from '../content/types'
import { focalStyle, sizedUrl } from '../lib/images'
import styles from './AboutIntro.module.css'
import shared from './shared.module.css'

export function AboutIntro({ aboutTeaser }: Pick<HomeContent, 'aboutTeaser'>) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.frame} data-reveal="0">
          <img
            className={styles.photo}
            src={sizedUrl(aboutTeaser.image.url, 1400)}
            alt={aboutTeaser.image.alt}
            style={focalStyle(aboutTeaser.image)}
            loading="lazy"
          />
        </div>

        <div>
          <p className={shared.eyebrow} data-reveal="80">
            {aboutTeaser.eyebrow}
          </p>
          <h2 className={styles.heading} data-reveal="140">
            {aboutTeaser.heading}
          </h2>
          <p className={styles.body} data-reveal="200">
            {aboutTeaser.body}
          </p>
          <Link to="/about" className={styles.cta} data-reveal="260">
            {aboutTeaser.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
