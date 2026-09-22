import type { SiteSettings } from '../content/types'
import styles from './SocialBanner.module.css'

type SocialBannerProps = {
  label: string
  settings: SiteSettings
}

/** Gold band inviting guests to follow. Same handle on both platforms. */
export function SocialBanner({ label, settings }: SocialBannerProps) {
  return (
    <section className={styles.banner}>
      <span className={styles.label} data-reveal="0">
        {label}
      </span>
      <span className={styles.handle} data-reveal="100">
        {settings.socialHandle}
      </span>
      <span className={styles.links} data-reveal="200">
        {settings.socials.map((social) => (
          <a
            key={social.label}
            className={styles.link}
            href={social.url}
            target="_blank"
            rel="noopener"
          >
            {social.label}
          </a>
        ))}
      </span>
    </section>
  )
}
