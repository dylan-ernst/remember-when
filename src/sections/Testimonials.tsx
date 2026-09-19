import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../content/home'
import styles from './Testimonials.module.css'

/* How long the top card takes to fly off before the deck advances. */
const FLY_MS = 480

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [flying, setFlying] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current)
    }
  }, [])

  const showNext = () => {
    if (flying) return
    setFlying(true)
    timer.current = window.setTimeout(() => {
      setFlying(false)
      setIndex((current) => (current + 1) % testimonials.length)
    }, FLY_MS)
  }

  const count = testimonials.length

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} data-reveal="0">
        Kind words from the&nbsp;dance&nbsp;floor
      </h2>

      <div
        className={styles.deck}
        data-reveal="80"
        role="button"
        tabIndex={0}
        aria-label="Show the next review"
        title="Click to see the next review"
        onClick={showNext}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            showNext()
          }
        }}
      >
        {testimonials.map((testimonial, cardIndex) => {
          /* 0 is the card on top, 1 and 2 are the ones stacked behind it. */
          const position = (cardIndex - index + count) % count
          const flyingOff = position === 0 && flying
          const direction = index % 2 === 0 ? 1 : -1

          const classNames = [styles.card]
          if (position === 0) classNames.push(styles.cardTop)
          if (position === 1) classNames.push(styles.cardSecond)
          if (position === 2) classNames.push(styles.cardThird)
          if (flyingOff) classNames.push(styles.cardFlying)

          return (
            <figure
              key={testimonial.who}
              className={classNames.join(' ')}
              style={
                flyingOff
                  ? {
                      transform: `translate(${62 * direction}%, -6%) rotate(${14 * direction}deg) scale(1.02)`,
                    }
                  : undefined
              }
              aria-hidden={position !== 0}
            >
              <div className={styles.stars} aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
              <figcaption className={styles.who}>{testimonial.who}</figcaption>
            </figure>
          )
        })}
      </div>

      <div className={styles.dots} aria-hidden="true">
        {testimonials.map((testimonial, dotIndex) => (
          <span
            key={testimonial.who}
            className={dotIndex === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
          />
        ))}
      </div>

      <p className={styles.note} data-reveal="200">
        Sample reviews. Swap in real client quotes.
      </p>
    </section>
  )
}
