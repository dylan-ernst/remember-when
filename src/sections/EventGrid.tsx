import { Link } from 'react-router-dom'
import { events } from '../content/home'
import styles from './EventGrid.module.css'
import shared from './shared.module.css'

export function EventGrid() {
  return (
    <section className={shared.section}>
      <p className={shared.eyebrow} data-reveal="0">
        FOR EVERY CELEBRATION
      </p>
      <h2 className={shared.heading} data-reveal="80">
        Where the good stories happen
      </h2>

      <div className={styles.grid}>
        {events.map((event, index) => (
          <Link key={event.name} to={event.to} className={styles.card} data-reveal={index * 90}>
            <img className={styles.image} src={event.image} alt={event.alt} loading="lazy" />
            <span className={styles.scrim} />
            <span className={styles.name}>{event.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
