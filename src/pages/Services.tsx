import { useRef } from 'react'
import { Link } from 'react-router-dom'
import buttons from '../components/buttons.module.css'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ParallaxBand } from '../components/ParallaxBand'
import { addons, servicesPage, tiers } from '../content/services'
import { site } from '../content/site'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Services.module.css'

export function Services() {
  const pageRef = useRef<HTMLDivElement>(null)
  useRevealGroup(pageRef)
  usePageTitle('Services | Remember When Photo Booth')

  const { hero, band, addonsHeading, cta } = servicesPage

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        image={hero.image}
        alt={hero.imageAlt}
        className={styles.hero}
      />

      <section className={styles.tiersSection}>
        <div className={styles.tiers}>
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
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
        alt={band.imageAlt}
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
            {addonsHeading.eyebrow}
          </p>
          <h2 className={styles.addonsHeading} data-reveal="80">
            {addonsHeading.heading}
          </h2>

          <div className={styles.addons}>
            {addons.map((addon, index) => (
              <div key={addon.name} className={styles.addon} data-reveal={index * 70}>
                <span className={styles.addonFrame}>
                  <img
                    className={styles.addonImage}
                    src={addon.image}
                    alt={addon.name}
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
        <a href={site.phone.href} className={buttons.quiet}>
          Call or text {site.phone.display}
        </a>
      </CtaBand>
    </div>
  )
}
