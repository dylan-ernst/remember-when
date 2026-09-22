import { useRef } from 'react'
import { Link } from 'react-router-dom'
import buttons from '../components/buttons.module.css'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ParallaxBand } from '../components/ParallaxBand'
import { focalStyle, sizedUrl } from '../lib/images'
import { ContentStatus } from '../components/ContentStatus'
import type { SiteSettings } from '../content/types'
import { useContent } from '../content/useContent'
import { telHref } from '../lib/phone'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Services.module.css'

export function Services({ settings }: { settings: SiteSettings }) {
  const pageRef = useRef<HTMLDivElement>(null)
  const content = useContent('services')
  useRevealGroup(pageRef)
  usePageTitle('Services | Remember When Photo Booth')

  if (content.status !== 'ready') return <ContentStatus {...content} />
  const { hero, tiers, band, addonsIntro, addons, cta } = content.data

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        image={hero.image}
        className={styles.hero}
      />

      <section className={styles.tiersSection}>
        <div className={styles.tiers}>
          {tiers.map((tier, index) => (
            <div
              key={tier._key}
              className={tier.popular ? `${styles.tier} ${styles.tierPopular}` : styles.tier}
              data-reveal={index * 100}
            >
              {tier.popular && <span className={styles.badge}>MOST POPULAR</span>}
              <span className={styles.tierName}>{tier.name}</span>
              <div className={styles.priceRow}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.unit}>{tier.unit}</span>
              </div>
              {tier.basedOn && <span className={styles.basedOn}>{tier.basedOn}</span>}
              <ul className={styles.features}>
                {tier.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.note && <p className={styles.note}>{tier.note}</p>}
              <Link
                to="/contact"
                className={tier.popular ? `${styles.tierCta} ${styles.tierCtaSolid}` : styles.tierCta}
              >
                BOOK {tier.name.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ParallaxBand
        image={band.image}
        className={styles.band}
        drift={110}
      >
        <p className={styles.bandLine}>
          {band.line}
          <span className={styles.accent}>{band.accent}</span>
        </p>
      </ParallaxBand>

      <section className={styles.addonsSection}>
        <div className={styles.addonsInner}>
          <p className={styles.addonsEyebrow} data-reveal="0">
            {addonsIntro.eyebrow}
          </p>
          <h2 className={styles.addonsHeading} data-reveal="80">
            {addonsIntro.heading}
          </h2>

          <div className={styles.addons}>
            {addons.map((addon, index) => (
              <div key={addon._key} className={styles.addon} data-reveal={index * 70}>
                <span className={styles.addonFrame}>
                  <img
                    className={styles.addonImage}
                    src={sizedUrl(addon.image.url, 700)}
                    alt={addon.image.alt}
                    style={focalStyle(addon.image)}
                    loading="lazy"
                  />
                </span>
                <span className={styles.addonBody}>
                  <span className={styles.addonTop}>
                    <span className={styles.addonName}>{addon.name}</span>
                    <span className={styles.addonPrice}>{addon.price}</span>
                  </span>
                  <span className={styles.addonDescription}>{addon.description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading={cta.heading} body={cta.body}>
        <Link to="/contact" className={buttons.solid}>
          {cta.primaryLabel}
        </Link>
        <a href={telHref(settings.phone)} className={buttons.quiet}>
          Call or text {settings.phone}
        </a>
      </CtaBand>
    </div>
  )
}
