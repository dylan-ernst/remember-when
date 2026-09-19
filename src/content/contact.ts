import contactHero from '../assets/photos/corporate.jpg'
import contactFeature from '../assets/photos/contact-feature.jpg'

export const contactPage = {
  hero: {
    eyebrow: 'CONTACT',
    title: 'Let’s chat',
    lead: 'We proudly serve Orange County and surrounding areas, so don’t hesitate to reach out.',
    image: contactHero,
    imageAlt: 'Friends laughing in the photo booth',
  },
  feature: {
    image: contactFeature,
    imageAlt: 'Guests enjoying an event',
  },
  form: {
    heading: 'Tell us about your event',
    submitLabel: 'SEND MESSAGE',
    sentMessage:
      'Opening your email app with the message ready to send. We’ll get back to you shortly.',
  },
} as const
