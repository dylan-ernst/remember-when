import { Link } from 'react-router-dom'
import { site } from '../content/site'
import styles from './ComingSoon.module.css'

type ComingSoonProps = {
  title: string
}

/** Stands in for a page that is designed but not built yet. */
export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>{title}</p>
      <h1 className={styles.heading}>This page is on its way</h1>
      <p className={styles.body}>
        We are still putting this one together. In the meantime, call or text us and we will get
        your date on the calendar.
      </p>
      <div className={styles.actions}>
        <a href={site.phone.href} className={styles.cta}>
          {site.phone.display}
        </a>
        <Link to="/" className={styles.back}>
          Back home
        </Link>
      </div>
    </section>
  )
}
