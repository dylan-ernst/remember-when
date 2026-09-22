import { Link } from 'react-router-dom'
import type { HomeContent } from '../content/types'
import { focalStyle, sizedUrl } from '../lib/images'
import styles from './EventGrid.module.css'
import shared from './shared.module.css'

type EventGridProps = Pick<HomeContent, 'eventsIntro' | 'events'>

export function EventGrid({ eventsIntro, events }: EventGridProps) {
  return (
    <section className={shared.section}>
      <p className={shared.eyebrow} data-reveal="0">
        {eventsIntro.eyebrow}
      </p>
      <h2 className={shared.heading} data-reveal="80">
        {eventsIntro.heading}
      </h2>

      <div className={styles.grid}>
        {events.map((event, index) => (
          <Link key={event._key} to="/services" className={styles.card} data-reveal={index * 90}>
            <img
              className={styles.image}
              src={sizedUrl(event.image.url, 900)}
              alt={event.image.alt}
              style={focalStyle(event.image)}
              loading="lazy"
            />
            <span className={styles.scrim} />
            <span className={styles.name}>{event.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
