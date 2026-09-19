import { Link } from 'react-router-dom'
import { packages } from '../content/home'
import styles from './Packages.module.css'
import shared from './shared.module.css'

export function Packages() {
  return (
    <section className={styles.section}>
      <p className={shared.eyebrow} data-reveal="60">
        PACKAGES
      </p>

      <div className={styles.headingRow}>
        <h2 className={styles.heading} data-reveal="80">
          Simple, all-in pricing
        </h2>
        <Link to="/services" className={styles.moreLink} data-reveal="160">
          See everything included →
        </Link>
      </div>

      <div className={styles.grid}>
        {packages.map((pack, index) => (
          <Link
            key={pack.name}
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
