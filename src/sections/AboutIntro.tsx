import { Link } from 'react-router-dom'
import { about } from '../content/home'
import styles from './AboutIntro.module.css'
import shared from './shared.module.css'

export function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.frame} data-reveal="0">
          <img className={styles.photo} src={about.image} alt={about.imageAlt} loading="lazy" />
        </div>

        <div>
          <p className={shared.eyebrow} data-reveal="80">
            {about.eyebrow}
          </p>
          <h2 className={styles.heading} data-reveal="140">
            {about.heading}
          </h2>
          <p className={styles.body} data-reveal="200">
            {about.body}
          </p>
          <Link to={about.ctaTo} className={styles.cta} data-reveal="260">
            {about.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
