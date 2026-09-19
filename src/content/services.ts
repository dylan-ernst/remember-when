import servicesHero from '../assets/photos/wedding.jpg'
import servicesBand from '../assets/photos/placeholder-services-parallax.jpg'
import extraHour from '../assets/photos/addon-extra-hour.jpg'
import dslrUpgrade from '../assets/photos/gallery-6.jpg'
import printUpgrade from '../assets/photos/gallery-1.jpg'
import bigHead from '../assets/photos/addon-bighead.jpg'

export type Tier = {
  name: string
  price: string
  unit: string
  /** Shown above the feature list when a tier builds on the one before it. */
  basedOn?: string
  features: readonly string[]
  note?: string
  popular: boolean
}

export type Addon = {
  name: string
  price: string
  description: string
  image: string
}

export const servicesPage = {
  hero: {
    eyebrow: 'OUR SERVICES',
    title: 'What we offer',
    lead: 'Three simple packages. Every one includes a real human attendant, unlimited sessions, and prints your guests take home.',
    image: servicesHero,
    imageAlt: 'Couple having fun with props in the photo booth',
  },
  band: {
    line: 'Birthdays · Community events · Weddings · ',
    accent: 'Corporate events',
    /* Stock stand-in until the client supplies a wide atmosphere photo. */
    image: servicesBand,
    imageAlt: 'Colorful confetti',
  },
  addonsHeading: {
    eyebrow: 'MAKE IT YOURS',
    heading: 'Optional add-ons',
  },
  cta: {
    heading: 'Ready to lock in your date?',
    body: 'Dates go fast. Tell us about your event and we’ll take it from there.',
    primaryLabel: 'GET A QUOTE',
  },
} as const

export const tiers: readonly Tier[] = [
  {
    name: 'Classic',
    price: '$425',
    unit: 'for 2 hours',
    features: [
      'Onsite attendant',
      'Standard black or white backdrop',
      'Props',
      'Unlimited sessions',
      '2x6 prints',
      'Custom photo strip design',
      'Digital sharing',
      'Online gallery',
      'Color photos',
    ],
    popular: false,
  },
  {
    name: 'Signature',
    price: '$525',
    unit: 'for 2 hours',
    basedOn: 'EVERYTHING IN CLASSIC, PLUS:',
    features: ['Premium patterned backdrop', 'B&W photo option', 'Dual photo-strip designs'],
    popular: true,
  },
  {
    name: 'Keepsakes',
    price: '$675',
    unit: 'for 2 hours',
    basedOn: 'EVERYTHING IN SIGNATURE, PLUS PICK 2:',
    features: ['Memory book', 'Magnetic photo sleeves', 'Custom photo keychains'],
    note: 'Includes 50 magnets and/or keychains. Additional: magnets $1/ea, keychains $2/ea.',
    popular: false,
  },
]

export const addons: readonly Addon[] = [
  {
    name: 'Additional hour',
    price: '$125',
    description: 'Keep the booth running while the party keeps going.',
    image: extraHour,
  },
  {
    name: 'DSLR booth upgrade',
    price: '$75',
    description: 'Pro camera upgrade for crisper, studio-quality shots.',
    image: dslrUpgrade,
  },
  {
    name: '4x6 print upgrade',
    price: '$100',
    description: 'Full-size postcard prints instead of classic strips.',
    image: printUpgrade,
  },
  {
    name: 'Custom big head props',
    price: '$100/head',
    description: 'Giant cutout heads of the guest of honor (or the dog).',
    image: bigHead,
  },
]
