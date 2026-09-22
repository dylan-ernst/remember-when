import type { HomeContent } from '../content/types'
import { sizedUrl } from '../lib/images'
import styles from './GalleryMarquee.module.css'

export function GalleryMarquee({ gallery }: Pick<HomeContent, 'gallery'>) {
  return (
    <section className={styles.section} aria-label="Photo booth gallery">
      {/* The list runs twice so the loop can reset at the halfway point unseen. */}
      <div className={styles.track}>
        {[0, 1].map((pass) =>
          gallery.map((photo) => (
            <img
              key={`${pass}-${photo._key}`}
              className={styles.photo}
              src={sizedUrl(photo.url, 900)}
              alt={pass === 0 ? photo.alt : ''}
              aria-hidden={pass === 1}
              loading="lazy"
            />
          )),
        )}
      </div>
    </section>
  )
}
