/**
 * Site-wide facts. Everything a client would ever ask to change lives in this
 * folder, so swapping in a CMS later means replacing these modules only.
 */
export const site = {
  name: 'Remember When Photo Booth',
  tagline: 'Every good story starts with “Remember When.”',
  phone: { display: '(949) 345-0434', href: 'tel:+19493450434' },
  email: 'contact.rememberwhenpb@gmail.com',
  instagram: {
    handle: '@rememberwhen.pb',
    url: 'https://www.instagram.com/rememberwhen.pb',
  },
  serviceArea: 'Serving Orange County & surrounding areas',
  designer: { name: 'Dylan Ernst', url: 'https://dylanernst.dev' },
} as const

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
