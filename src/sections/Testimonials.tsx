import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../content/home'
import styles from './Testimonials.module.css'

/* How long the top card takes to fly off before the deck advances. */
const FLY_MS = 480

/* Only the front three cards of the stack are drawn. */
const VISIBLE_CARDS = 3

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [flying, setFlying] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [clipped, setClipped] = useState(false)
  const quoteRef = useRef<HTMLQuoteElement>(null)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current)
    }
  }, [])

  /* A quote taller than its clamp earns a Read more link. Measured, not guessed,
     because the line count depends on the width and the font that loaded. */
  useEffect(() => {
    const el = quoteRef.current
    if (!el || expanded) return

    const measure = () => setClipped(el.scrollHeight > el.clientHeight + 1)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [index, expanded])

  const showNext = () => {
    if (flying) return
    setExpanded(false)
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
        className={expanded ? `${styles.deck} ${styles.deckExpanded}` : styles.deck}
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
          if (position >= VISIBLE_CARDS) return null

          const onTop = position === 0
          const flyingOff = onTop && flying
          const direction = index % 2 === 0 ? 1 : -1

          const classNames = [styles.card]
          if (onTop) classNames.push(styles.cardTop)
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
              aria-hidden={!onTop}
            >
              <div className={styles.stars} aria-hidden="true">
                ★★★★★
              </div>

              <blockquote
                ref={onTop ? quoteRef : undefined}
                className={onTop && expanded ? styles.quote : `${styles.quote} ${styles.quoteClamped}`}
              >
                {testimonial.quote}
              </blockquote>

              {onTop && (clipped || expanded) && (
                <button
                  type="button"
                  className={styles.more}
                  onClick={(event) => {
                    event.stopPropagation()
                    setExpanded((open) => !open)
                  }}
                >
                  {expanded ? 'Read less' : 'Read more'}
                </button>
              )}

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
    </section>
  )
}
