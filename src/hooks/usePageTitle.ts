import { useEffect } from 'react'

/** Keeps the browser tab title in step with the route. */
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title
  }, [title])
}
