import heroPlaceholder from '../assets/photos/placeholder-hero.jpg'
import parallaxPlaceholder from '../assets/photos/placeholder-parallax.jpg'
import heroVideo from '../assets/video/hero-booth.mp4'
import weddingPhoto from '../assets/photos/wedding.jpg'
import birthdayPhoto from '../assets/photos/birthday.jpg'
import dancePhoto from '../assets/photos/dance.jpg'
import corporatePhoto from '../assets/photos/corporate.jpg'
import gallery1 from '../assets/photos/gallery-1.jpg'
import gallery2 from '../assets/photos/gallery-2.jpg'
import gallery3 from '../assets/photos/gallery-3.jpg'
import gallery4 from '../assets/photos/gallery-4.jpg'
import gallery5 from '../assets/photos/gallery-5.jpg'
import gallery6 from '../assets/photos/gallery-6.jpg'
import couplePhoto from '../assets/photos/casey-shayne.avif'

export type EventCard = {
  name: string
  image: string
  alt: string
  to: string
}

export type Package = {
  name: string
  price: string
  unit: string
  blurb: string
  popular: boolean
}

export type Testimonial = {
  quote: string
  who: string
}

export const hero = {
  headlineLead: 'Every good story starts with ',
  headlineAccent: '“Remember When”',
  blurb:
    'Photo booth rentals for weddings, birthdays, school dances, and everything worth remembering. Proudly serving Orange County.',
  ctaLabel: 'BOOK YOUR DATE',
  ctaTo: '/contact',
  /* Stock stand-in until the client supplies a wide hero photo. */
  image: heroPlaceholder,
  imageAlt: 'Confetti falling at a celebration',
  video: heroVideo,
} as const

export const events: readonly EventCard[] = [
  { name: 'Weddings', image: weddingPhoto, alt: 'Wedding guests in the photo booth', to: '/services' },
  { name: 'Birthdays', image: birthdayPhoto, alt: 'Birthday party photo booth strip', to: '/services' },
  { name: 'School Dances', image: dancePhoto, alt: 'Students posing at a school dance', to: '/services' },
  {
    name: 'Corporate & Community',
    image: corporatePhoto,
    alt: 'Guests at a corporate event photo booth',
    to: '/services',
  },
]

export const manifesto = {
  lead: 'It’s not just a photo booth. It’s a way to ',
  accent: 'freeze a feeling',
  trail: ', a small piece of a big memory.',
  /* Stock stand-in until the client supplies a wide atmosphere photo. */
  image: parallaxPlaceholder,
  imageAlt: 'Friends celebrating with confetti at night',
} as const

export const packages: readonly Package[] = [
  {
    name: 'Classic',
    price: '$425',
    unit: 'for 2 hours',
    blurb: 'The essentials done right: attendant, props, unlimited sessions, custom photo strips.',
    popular: false,
  },
  {
    name: 'Signature',
    price: '$525',
    unit: 'for 2 hours',
    blurb: 'Everything in Classic, plus premium backdrops, B&W option, and dual strip designs.',
    popular: true,
  },
  {
    name: 'Keepsakes',
    price: '$675',
    unit: 'for 2 hours',
    blurb:
      'Everything in Signature, plus keepsakes to take home: memory book, magnets, or keychains.',
    popular: false,
  },
]

export const gallery: readonly string[] = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
]

/* Placeholder copy. Swap in real client quotes before launch. */
export const testimonials: readonly Testimonial[] = [
  {
    quote:
      '“The booth was the highlight of our reception. Our guests would not leave it alone. The photo strips came out beautiful.”',
    who: 'Sample: Wedding, Anaheim',
  },
  {
    quote:
      '“So easy to work with from booking to breakdown. The attendant kept the line moving and the kids laughing all night.”',
    who: 'Sample: School Dance, Irvine',
  },
  {
    quote:
      '“We did the Keepsakes package and the memory book made everyone cry (happy tears). Worth every penny.”',
    who: 'Sample: 50th Birthday, Orange',
  },
]

export const about = {
  eyebrow: 'ABOUT US',
  heading: 'Hi, we’re Casey & Shayne',
  body:
    'A husband-and-wife team with a small business built on love, laughter, and the moments that matter most. We believe the best moments aren’t always the posed ones. They’re the in-between laughs, the inside jokes, and the people who make everything feel special.',
  ctaLabel: 'READ OUR STORY',
  ctaTo: '/about',
  image: couplePhoto,
  imageAlt: 'Casey and Shayne',
} as const
