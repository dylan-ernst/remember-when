import { site } from '../content/site'
import styles from './InstagramBanner.module.css'

export function InstagramBanner() {
  return (
    <a className={styles.banner} href={site.instagram.url} target="_blank" rel="noopener">
      <span className={styles.label} data-reveal="0">
        FOLLOW ALONG ON INSTAGRAM
      </span>
      <span className={styles.handle} data-reveal="100">
        {site.instagram.handle}
      </span>
    </a>
  )
}
