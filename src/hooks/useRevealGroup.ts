import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { usePrefersReducedMotion } from './useMediaQuery'

/**
 * Fades in every `[data-reveal]` element inside `root` as it scrolls into view.
 * The attribute's value is the stagger delay in milliseconds.
 *
 * Elements are picked up after every render, so sections that swap their markup
 * (the hero changes between phone and desktop) still animate, and each element
 * is observed once.
 */
export function useRevealGroup(root: RefObject<HTMLElement | null>): void {
  const observer = useRef<IntersectionObserver | null>(null)
  const seen = useRef<WeakSet<Element>>(new WeakSet())
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    /* A fresh observer needs a fresh record of what it is already watching. */
    seen.current = new WeakSet()
    if (reducedMotion) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.dataset.visible = 'true'
          io.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )
    observer.current = io

    return () => {
      io.disconnect()
      observer.current = null
    }
  }, [reducedMotion])

  useEffect(() => {
    const container = root.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>('[data-reveal]')
    for (const el of targets) {
      if (seen.current.has(el)) continue
      seen.current.add(el)

      if (reducedMotion) {
        el.dataset.visible = 'true'
        continue
      }

      el.style.transitionDelay = `${el.dataset.reveal || 0}ms`
      observer.current?.observe(el)
    }
  })
}
