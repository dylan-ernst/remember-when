import { useEffect, useState } from 'react'

/** Subscribes to a media query and re-renders when it starts or stops matching. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)
    setMatches(list.matches)
    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/** The one breakpoint that changes structure rather than just spacing. */
export const MOBILE_QUERY = '(max-width: 859px)'

export function useIsMobile(): boolean {
  return useMediaQuery(MOBILE_QUERY)
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
