import { Link } from 'react-router-dom'
import logoMain from '../assets/logo-main.png'
import { designer, footerLinks } from '../content/nav'
import type { SiteSettings } from '../content/types'
import { CopyButton } from './CopyButton'
import { InstagramIcon, MailIcon, PhoneIcon, TikTokIcon } from './icons'
import styles from './SiteFooter.module.css'

/* Keyed by the platform name in Studio; a platform with no glyph falls back to
   its name so a new link can never render as an empty circle. */
const SOCIAL_ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
}

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <img src={logoMain} alt={settings.name} className={styles.logo} />
          <p className={styles.tagline}>{settings.tagline}</p>
        </div>

        <nav className={styles.nav}>
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <div className={styles.iconRow}>
            <CopyButton value={settings.phone} label={`Copy phone number ${settings.phone}`}>
              <PhoneIcon />
            </CopyButton>

            <CopyButton value={settings.email} label={`Copy email address ${settings.email}`}>
              <MailIcon />
            </CopyButton>

            {settings.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.label]
              const label = `${social.label}: ${settings.socialHandle}`

              return (
                <a
                  key={social.label}
                  className={styles.iconLink}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  title={label}
                >
                  {Icon ? <Icon /> : social.label}
                </a>
              )
            })}
          </div>

          <span className={styles.area}>{settings.serviceArea}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} {settings.name}. All rights reserved.</p>
        <p>
          Designed by{' '}
          <a href={designer.url} target="_blank" rel="noopener">
            {designer.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
