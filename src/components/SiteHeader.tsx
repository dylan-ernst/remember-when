import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoMark from '../assets/logo-mark.png'
import { navLinks, site } from '../content/site'
import { useIsMobile } from '../hooks/useMediaQuery'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()

  /* The overlay only exists on phones, and a new page always starts closed. */
  useEffect(() => {
    setMenuOpen(false)
  }, [isMobile, location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>
          <img src={logoMark} alt={`${site.name} logo`} className={styles.mark} />
          <span className={styles.wordmark}>
            Remember When
            <br />
            <span className={styles.wordmarkAccent}>Photo Booth</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className={styles.bookButton}>
            BOOK NOW
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={`${styles.bar} ${styles.barShort}`} />
        </button>
      </header>

      {menuOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayTop}>
            <img src={logoMark} alt="" className={styles.mark} />
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className={styles.overlayNav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.overlayLink} ${styles.navLinkActive}` : styles.overlayLink
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a href={site.phone.href} className={styles.overlayPhone}>
            Call or text {site.phone.display}
          </a>
        </div>
      )}
    </>
  )
}
