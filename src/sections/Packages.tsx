import { Link } from 'react-router-dom'
import type { HomeContent } from '../content/types'
import styles from './Packages.module.css'
import shared from './shared.module.css'

type PackagesProps = Pick<HomeContent, 'packagesIntro' | 'packages'>

export function Packages({ packagesIntro, packages }: PackagesProps) {
  return (
    <section className={styles.section}>
      <p className={shared.eyebrow} data-reveal="60">
        {packagesIntro.eyebrow}
      </p>

      <div className={styles.headingRow}>
        <h2 className={styles.heading} data-reveal="80">
          {packagesIntro.heading}
        </h2>
        <Link to="/services" className={styles.moreLink} data-reveal="160">
          {packagesIntro.linkLabel}
        </Link>
      </div>

      <div className={styles.grid}>
        {packages.map((pack, index) => (
          <Link
            key={pack._key}
            to="/services"
            className={pack.popular ? `${styles.card} ${styles.cardPopular}` : styles.card}
            data-reveal={index * 90}
          >
            {pack.popular && <span className={styles.badge}>MOST POPULAR</span>}
            <span className={styles.name}>{pack.name}</span>
            <span className={styles.price}>{pack.price}</span>
            <span className={styles.unit}>{pack.unit}</span>
            <span className={styles.blurb}>{pack.blurb}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
