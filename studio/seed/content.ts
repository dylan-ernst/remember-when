/**
 * The site's starting content, lifted from the hand-written modules the site
 * shipped with. `npm run seed` loads it into Sanity; after that, Studio is the
 * source of truth and this file is only a record of where each page began.
 *
 * Photos are named as they sit in ../src/assets/photos.
 */
export type SeedImage = {
  file: string
  alt: string
}

export const siteSettings = {
  name: 'Remember When Photo Booth',
  tagline: 'Every good story starts with “Remember When.”',
  phone: '(949) 345-0434',
  email: 'contact.rememberwhenpb@gmail.com',
  serviceArea: 'Serving Orange County & surrounding areas',
  socialHandle: '@rememberwhen.pb',
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/rememberwhen.pb' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@rememberwhen.pb' },
  ],
}

export const homePage = {
  hero: {
    headlineLead: 'Every good story starts with ',
    headlineAccent: '“Remember When”',
    blurb:
      'Photo booth rentals for weddings, birthdays, school dances, and everything worth remembering. Proudly serving Orange County.',
    ctaLabel: 'BOOK YOUR DATE',
  },
  eventsIntro: {
    eyebrow: 'FOR EVERY CELEBRATION',
    heading: 'Where the good stories happen',
  },
  events: [
    { name: 'Weddings', image: { file: 'wedding.jpg', alt: 'Wedding guests in the photo booth' } },
    { name: 'Birthdays', image: { file: 'birthday.jpg', alt: 'Birthday party photo booth strip' } },
    { name: 'School Dances', image: { file: 'dance.jpg', alt: 'Students posing at a school dance' } },
    {
      name: 'Corporate & Community',
      image: { file: 'corporate.jpg', alt: 'Guests at a corporate event photo booth' },
    },
  ],
  manifesto: {
    lead: 'It’s not just a photo booth. It’s a way to ',
    accent: 'freeze a feeling',
    trail: ', a small piece of a big memory.',
    image: { file: 'placeholder-parallax.jpg', alt: 'Friends celebrating with confetti at night' },
  },
  packagesIntro: {
    eyebrow: 'PACKAGES',
    heading: 'Simple, all-in pricing',
    linkLabel: 'See everything included →',
  },
  packages: [
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
  ],
  gallery: [
    { file: 'gallery-1.jpg', alt: 'Photo booth moment 1' },
    { file: 'gallery-2.jpg', alt: 'Photo booth moment 2' },
    { file: 'gallery-3.jpg', alt: 'Photo booth moment 3' },
    { file: 'gallery-4.jpg', alt: 'Photo booth moment 4' },
    { file: 'gallery-5.jpg', alt: 'Photo booth moment 5' },
    { file: 'gallery-6.jpg', alt: 'Photo booth moment 6' },
  ],
  testimonialsHeading: 'Kind words from the dance floor',
  /* Real Google reviews. Em dash and spacing tidied, wording untouched. */
  testimonials: [
    {
      quote:
        'We had SO much fun with this Photo Booth! Everything ran so smoothly from start to finish. Shayne was amazing, super kind, professional, and very easy to communicate with throughout the whole process. The photos printed out right away, and we also loved that we could message them to ourselves instantly. Such a fun and convenient touch! We also ordered a jumbo head and I 100% recommend it, it was a huge hit and made everything even more fun. I wish I could leave 1000000 stars! Highly recommend for any event! 🎉✨',
      who: 'Roxy Habash',
    },
    {
      quote:
        'I had Remember When at my wedding and they were a hit! All my guests and myself loved the Photo Booth! The extra decor they brought made the booth so much fun! I can’t recommend them enough! They had giant cut outs of mine and my husband’s head. They were a huge hit!',
      who: 'Ashleigh Adner',
    },
    {
      quote:
        'Had so much fun having Remember When at my event! They are incredibly kind and professional. All of my guests had an amazing time and I will absolutely be using them again for future events!',
      who: 'Sydney Pokard',
    },
    {
      quote: 'The best photobooth! Always so professional and great quality photos.',
      who: 'Lucy Pittman',
    },
  ],
  aboutTeaser: {
    eyebrow: 'ABOUT US',
    heading: 'Hi, we’re Casey & Shayne',
    body:
      'A husband-and-wife team with a small business built on love, laughter, and the moments that matter most. We believe the best moments aren’t always the posed ones. They’re the in-between laughs, the inside jokes, and the people who make everything feel special.',
    ctaLabel: 'READ OUR STORY',
    image: { file: 'casey-shayne.jpg', alt: 'Casey and Shayne' },
  },
  followLabel: 'FOLLOW ALONG',
}

export const aboutPage = {
  hero: {
    eyebrow: 'ABOUT US',
    title: 'The full story',
    image: {
      file: 'about-hero.jpg',
      alt: 'Couple in the photo booth in front of a greenery backdrop',
    },
  },
  intro: {
    first:
      'Welcome to Remember When Photo Booth, a small business built on love, laughter, and the moments that matter most. As a husband-and-wife team, we created this with more than just events in mind. We created it for the memories that live on long after the night ends.',
    secondLead:
      'We believe the best moments aren’t always the posed ones. They’re the in-between laughs, the inside jokes, the hugs, and the people who make everything feel special. Those are the moments that turn into stories you tell again and again. Because truly, ',
    secondHighlight: '“Every good story starts with Remember When.”',
    third:
      'What started as a shared passion for capturing those genuine connections has grown into a way for us to be part of life’s most meaningful celebrations. From weddings and birthdays to school dances and community events, it’s an honor to help create something your guests can take home: a small piece of a big memory.',
  },
  band: {
    lead: 'A way to freeze a feeling, hold onto a moment, and look back ',
    accent: 'years from now with a smile.',
    image: { file: 'casey-shayne.jpg', alt: 'Casey and Shayne' },
  },
  closing: {
    first:
      'To us, this isn’t just a photo booth. It’s a way to freeze a feeling, to hold onto a moment, and to give people something they’ll look back on years from now with a smile.',
    second:
      'Thank you for trusting us with your memories and for supporting our little dream.',
    signature: 'Casey & Shayne',
    signatureSub: 'Remember When Photo Booth',
  },
  cta: {
    heading: 'Let’s work together',
    body: 'Get in touch so we can start working together.',
    primaryLabel: 'GET IN TOUCH',
    secondaryLabel: 'SEE PACKAGES',
  },
}

export const servicesPage = {
  hero: {
    eyebrow: 'OUR SERVICES',
    title: 'What we offer',
    lead: 'Three simple packages. Every one includes a real human attendant, unlimited sessions, and prints your guests take home.',
    image: { file: 'wedding.jpg', alt: 'Couple having fun with props in the photo booth' },
  },
  tiers: [
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
  ],
  band: {
    line: 'Birthdays · Community events · Weddings · ',
    accent: 'Corporate events',
    image: { file: 'placeholder-services-parallax.jpg', alt: 'Colorful confetti' },
  },
  addonsIntro: {
    eyebrow: 'MAKE IT YOURS',
    heading: 'Optional add-ons',
  },
  addons: [
    {
      name: 'Additional hour',
      price: '$125',
      description: 'Keep the booth running while the party keeps going.',
      image: { file: 'addon-extra-hour.jpg', alt: 'Guests in the photo booth late in the night' },
    },
    {
      name: 'DSLR booth upgrade',
      price: '$75',
      description: 'Pro camera upgrade for crisper, studio-quality shots.',
      image: { file: 'gallery-6.jpg', alt: 'A sharp photo booth portrait' },
    },
    {
      name: '4x6 print upgrade',
      price: '$100',
      description: 'Full-size postcard prints instead of classic strips.',
      image: { file: 'gallery-1.jpg', alt: 'Guests holding their prints' },
    },
    {
      name: 'Custom big head props',
      price: '$100/head',
      description: 'Giant cutout heads of the guest of honor (or the dog).',
      image: { file: 'addon-bighead.jpg', alt: 'Guests holding giant cutout head props' },
    },
  ],
  cta: {
    heading: 'Ready to lock in your date?',
    body: 'Dates go fast. Tell us about your event and we’ll take it from there.',
    primaryLabel: 'GET A QUOTE',
  },
}

export const contactPage = {
  hero: {
    eyebrow: 'CONTACT',
    title: 'Let’s chat',
    lead: 'We proudly serve Orange County and surrounding areas, so don’t hesitate to reach out.',
    image: { file: 'corporate.jpg', alt: 'Friends laughing in the photo booth' },
  },
  featureImage: { file: 'contact-feature.jpg', alt: 'Guests enjoying an event' },
  form: {
    heading: 'Tell us about your event',
    submitLabel: 'SEND MESSAGE',
    sendingLabel: 'SENDING...',
    sentMessageLead: 'Thank you.',
    sentMessageBody: 'Your message is in and we will get back to you shortly.',
    errorMessage: 'That did not go through.',
    errorLinkLabel: 'Send it by email instead.',
  },
}
