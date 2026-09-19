import { useRef } from 'react'
import { Link } from 'react-router-dom'
import buttons from '../components/buttons.module.css'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ParallaxBand } from '../components/ParallaxBand'
import { aboutPage } from '../content/about'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './About.module.css'

export function About() {
  const pageRef = useRef<HTMLDivElement>(null)
  useRevealGroup(pageRef)
  usePageTitle('About Us | Remember When Photo Booth')

  const { hero, intro, band, closing, cta } = aboutPage

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        image={hero.image}
        alt={hero.imageAlt}
        className={styles.hero}
      />

      <section className={styles.prose}>
        <div className={styles.column}>
          <p className={styles.paragraph} data-reveal="0">
            {intro.first}
          </p>
          <p className={styles.paragraph} data-reveal="60">
            {intro.secondLead}
            <em className={styles.highlight}>{intro.secondHighlight}</em>
          </p>
          <p className={styles.paragraph} data-reveal="60">
            {intro.third}
          </p>
        </div>
      </section>

      <ParallaxBand
        image={band.image}
        alt={band.imageAlt}
        className={styles.band}
        drift={110}
        scaleBase={1}
        scaleRange={0.05}
      >
        <p className={styles.bandLine}>
          {band.lead}
          <span className={styles.accent}>{band.accent}</span>
        </p>
      </ParallaxBand>

      <section className={`${styles.prose} ${styles.proseAlt}`}>
        <div className={styles.column}>
          <p className={styles.paragraph} data-reveal="0">
            {closing.first}
          </p>
          <p className={styles.paragraph} data-reveal="60">
            {closing.second}
          </p>
          <p className={styles.signature} data-reveal="120">
            {closing.signature}
            <br />
            <span className={styles.signatureSub}>{closing.signatureSub}</span>
          </p>
        </div>
      </section>

      <CtaBand heading={cta.heading} body={cta.body}>
        <Link to="/contact" className={buttons.solid}>
          {cta.primaryLabel}
        </Link>
        <Link to="/services" className={buttons.outline}>
          {cta.secondaryLabel}
        </Link>
      </CtaBand>
    </div>
  )
}
