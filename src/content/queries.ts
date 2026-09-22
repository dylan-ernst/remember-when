import type { ContentKey } from './types'

/* Every photo comes back flattened to the fields the site actually uses. */
const image = '{ "url": asset->url, alt, hotspot{ x, y } }'

export const queries: Record<ContentKey, string> = {
  settings: `*[_id == "siteSettings"][0]{
    name, tagline, phone, email, serviceArea, socialHandle,
    socials[]{ _key, label, url }
  }`,

  home: `*[_id == "homePage"][0]{
    hero{ headlineLead, headlineAccent, blurb, ctaLabel },
    eventsIntro{ eyebrow, heading },
    events[]{ _key, name, image${image} },
    manifesto{ lead, accent, trail, image${image} },
    packagesIntro{ eyebrow, heading, linkLabel },
    packages[]{ _key, name, price, unit, blurb, popular },
    gallery[]{ _key, "url": asset->url, alt, hotspot{ x, y } },
    testimonialsHeading,
    testimonials[]{ _key, quote, who },
    aboutTeaser{ eyebrow, heading, body, ctaLabel, image${image} },
    followLabel
  }`,

  about: `*[_id == "aboutPage"][0]{
    hero{ eyebrow, title, image${image} },
    intro{ first, secondLead, secondHighlight, third },
    band{ lead, accent, image${image} },
    closing{ first, second, signature, signatureSub },
    cta{ heading, body, primaryLabel, secondaryLabel }
  }`,

  services: `*[_id == "servicesPage"][0]{
    hero{ eyebrow, title, lead, image${image} },
    tiers[]{ _key, name, price, unit, basedOn, features, note, popular },
    band{ line, accent, image${image} },
    addonsIntro{ eyebrow, heading },
    addons[]{ _key, name, price, description, image${image} },
    cta{ heading, body, primaryLabel }
  }`,

  contact: `*[_id == "contactPage"][0]{
    hero{ eyebrow, title, lead, image${image} },
    featureImage${image},
    form{
      heading, submitLabel, sendingLabel,
      sentMessageLead, sentMessageBody, errorMessage, errorLinkLabel
    }
  }`,
}
