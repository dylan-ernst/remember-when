import aboutHero from '../assets/photos/about-hero.jpg'
import couplePhoto from '../assets/photos/casey-shayne.avif'

export const aboutPage = {
  hero: {
    eyebrow: 'ABOUT US',
    title: 'The full story',
    image: aboutHero,
    imageAlt: 'Couple in the photo booth in front of a greenery backdrop',
  },
  intro: {
    first:
      'Welcome to Remember When Photo Booth, a small business built on love, laughter, and the moments that matter most. As a husband-and-wife team, we created this with more than just events in mind. We created it for the memories that live on long after the night ends.',
    /* The middle paragraph ends on the brand line, called out in yellow. */
    secondLead:
      'We believe the best moments aren’t always the posed ones. They’re the in-between laughs, the inside jokes, the hugs, and the people who make everything feel special. Those are the moments that turn into stories you tell again and again. Because truly, ',
    secondHighlight: '“Every good story starts with Remember When.”',
    third:
      'What started as a shared passion for capturing those genuine connections has grown into a way for us to be part of life’s most meaningful celebrations. From weddings and birthdays to school dances and community events, it’s an honor to help create something your guests can take home: a small piece of a big memory.',
  },
  band: {
    lead: 'A way to freeze a feeling, hold onto a moment, and look back ',
    accent: 'years from now with a smile.',
    image: couplePhoto,
    imageAlt: 'Casey and Shayne',
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
} as const
