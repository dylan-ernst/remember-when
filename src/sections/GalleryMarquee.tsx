import { gallery } from '../content/home'
import styles from './GalleryMarquee.module.css'

export function GalleryMarquee() {
  return (
    <section className={styles.section} aria-label="Photo booth gallery">
      {/* The list runs twice so the loop can reset at the halfway point unseen. */}
      <div className={styles.track}>
        {[0, 1].map((pass) =>
          gallery.map((photo, index) => (
            <img
              key={`${pass}-${photo}`}
              className={styles.photo}
              src={photo}
              alt={pass === 0 ? `Photo booth moment ${index + 1}` : ''}
              aria-hidden={pass === 1}
              loading="lazy"
            />
          )),
        )}
      </div>
    </section>
  )
}
