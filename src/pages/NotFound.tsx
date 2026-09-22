import { Link } from 'react-router-dom'
import type { SiteSettings } from '../content/types'
import { usePageTitle } from '../hooks/usePageTitle'
import { telHref } from '../lib/phone'
import styles from './NotFound.module.css'

export function NotFound({ settings }: { settings: SiteSettings }) {
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
        <a href={telHref(settings.phone)} className={styles.back}>
          {settings.phone}
        </a>
      </div>
    </section>
  )
}
