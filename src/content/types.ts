export type SiteImage = {
  url: string
  alt: string
  /** Focal point set in Studio, 0 to 1 from the top left */
  hotspot?: { x: number; y: number } | null
}

export type SocialLink = {
  label: string
  url: string
}

export type SiteSettings = {
  name: string
  tagline: string
  phone: string
  email: string
  serviceArea: string
  socialHandle: string
  socials: readonly SocialLink[]
}

type Keyed = { _key: string }

export type HomeContent = {
  hero: {
    headlineLead: string
    headlineAccent: string
    blurb: string
    ctaLabel: string
  }
  eventsIntro: { eyebrow: string; heading: string }
  events: readonly (Keyed & { name: string; image: SiteImage })[]
  manifesto: { lead: string; accent: string; trail: string; image: SiteImage }
  packagesIntro: { eyebrow: string; heading: string; linkLabel: string }
  packages: readonly (Keyed & {
    name: string
    price: string
    unit: string
    blurb: string
    popular: boolean
  })[]
  gallery: readonly (Keyed & SiteImage)[]
  testimonialsHeading: string
  testimonials: readonly (Keyed & { quote: string; who: string })[]
  aboutTeaser: {
    eyebrow: string
    heading: string
    body: string
    ctaLabel: string
    image: SiteImage
  }
  followLabel: string
}

export type AboutContent = {
  hero: { eyebrow: string; title: string; image: SiteImage }
  intro: { first: string; secondLead: string; secondHighlight: string; third: string }
  band: { lead: string; accent: string; image: SiteImage }
  closing: { first: string; second: string; signature: string; signatureSub: string }
  cta: { heading: string; body: string; primaryLabel: string; secondaryLabel: string }
}

export type ServicesContent = {
  hero: { eyebrow: string; title: string; lead: string; image: SiteImage }
  tiers: readonly (Keyed & {
    name: string
    price: string
    unit: string
    basedOn?: string | null
    features: readonly string[]
    note?: string | null
    popular: boolean
  })[]
  band: { line: string; accent: string; image: SiteImage }
  addonsIntro: { eyebrow: string; heading: string }
  addons: readonly (Keyed & {
    name: string
    price: string
    description: string
    image: SiteImage
  })[]
  cta: { heading: string; body: string; primaryLabel: string }
}

export type ContactContent = {
  hero: { eyebrow: string; title: string; lead: string; image: SiteImage }
  featureImage: SiteImage
  form: {
    heading: string
    submitLabel: string
    sendingLabel: string
    sentMessageLead: string
    sentMessageBody: string
    errorMessage: string
    errorLinkLabel: string
  }
}

export type ContentMap = {
  settings: SiteSettings
  home: HomeContent
  about: AboutContent
  services: ServicesContent
  contact: ContactContent
}

export type ContentKey = keyof ContentMap
