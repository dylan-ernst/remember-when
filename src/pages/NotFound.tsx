import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './NotFound.module.css'

export function NotFound() {
  usePageTitle('Page not found | Remember When Photo Booth')

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.heading}>We cannot find that page</h1>
      <p className={styles.body}>
        The link may be old or mistyped. Head back home, or call or text us and we will get your
        date on the calendar.
      </p>
      <div className={styles.actions}>
        <Link to="/" className={styles.cta}>
          BACK HOME
        </Link>
        <a href={site.phone.href} className={styles.back}>
          {site.phone.display}
        </a>
      </div>
    </section>
  )
}
