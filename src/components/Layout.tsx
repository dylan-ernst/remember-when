import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import type { SiteSettings } from '../content/types'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function Layout({ settings }: { settings: SiteSettings }) {
  const { pathname } = useLocation()

  /* A new page starts at the top, not wherever the last one was scrolled to. */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SiteHeader settings={settings} />
      <main>
        <Outlet />
      </main>
      <SiteFooter settings={settings} />
    </>
  )
}
