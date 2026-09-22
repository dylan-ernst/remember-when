/* Structure, not content: these pages exist in the router, so they are not editable in Studio. */
export type NavLink = {
  label: string
  to: string
}

export const navLinks: readonly NavLink[] = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'SERVICES', to: '/services' },
  { label: 'CONTACT', to: '/contact' },
]

export const footerLinks: readonly NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const designer = { name: 'Dylan Ernst', url: 'https://dylanernst.dev' }
