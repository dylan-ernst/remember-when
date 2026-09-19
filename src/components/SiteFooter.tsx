import { Link } from 'react-router-dom'
import logoMain from '../assets/logo-main.png'
import { footerLinks, site } from '../content/site'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <img src={logoMain} alt={site.name} className={styles.logo} />
          <p className={styles.tagline}>{site.tagline}</p>
        </div>

        <nav className={styles.nav}>
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href={site.phone.href}>{site.phone.display}</a>
          <a href={`mailto:${site.email}`} className={styles.email}>
            {site.email}
          </a>
          <a href={site.instagram.url} target="_blank" rel="noopener">
            Instagram: {site.instagram.handle}
          </a>
          <span className={styles.area}>{site.serviceArea}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>
          Designed by{' '}
          <a href={site.designer.url} target="_blank" rel="noopener">
            {site.designer.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
