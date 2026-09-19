import { useEffect } from 'react'
import { usePrefersReducedMotion } from './useMediaQuery'

/**
 * Runs `update` once per animation frame while the page scrolls or resizes.
 * `update` must be stable (wrap it in useCallback) or the listeners re-attach
 * on every render. Skipped entirely when the visitor asked for reduced motion.
 */
export function useScrollDriven(update: () => void): void {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0
    const run = () => {
      frame = 0
      update()
    }
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(run)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [update, reducedMotion])
}

/** Clamps a value into the 0 to 1 range. */
export function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value))
}
