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
    sendingLabel: 'SENDING...',
    sentMessage: 'Thank you. Your message is in and we will get back to you shortly.',
    errorMessage: 'That did not go through.',
    errorLinkLabel: 'Send it by email instead.',
  },
} as const
