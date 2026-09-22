import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      description: 'The logo animation carries the top of the page; this is the copy under it.',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'headlineLead',
          title: 'Headline, first part',
          type: 'string',
          description: 'Read by screen readers and search engines, not shown on screen.',
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'headlineAccent', title: 'Headline, highlighted part', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'blurb', title: 'Blurb', type: 'text', rows: 3, validation: (rule) => rule.required() }),
        defineField({ name: 'ctaLabel', title: 'Button label', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'eventsIntro',
      title: 'Event types, heading',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Small label above', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: 'events',
      title: 'Event types',
      type: 'array',
      description: 'The four cards under the heading. Each one links to the services page.',
      of: [
        {
          type: 'object',
          name: 'eventCard',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'image', title: 'Photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'name', media: 'image' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'manifesto',
      title: 'Full-width line',
      type: 'object',
      description: 'The sentence that scrolls over a photo between the event cards and the packages.',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'lead', title: 'Line, first part', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'accent', title: 'Highlighted words', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'trail', title: 'Line, last part', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'image', title: 'Background photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'packagesIntro',
      title: 'Packages, heading',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Small label above', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'linkLabel', title: 'Link to the services page', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      description: 'The short version. The full feature lists live on the services page.',
      of: [
        {
          type: 'object',
          name: 'packageCard',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'price', title: 'Price', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'unit', title: 'What the price covers', type: 'string', description: 'e.g. for 2 hours', validation: (rule) => rule.required() }),
            defineField({ name: 'blurb', title: 'Description', type: 'text', rows: 2, validation: (rule) => rule.required() }),
            defineField({ name: 'popular', title: 'Show the "most popular" badge', type: 'boolean', initialValue: false }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery strip',
      type: 'array',
      description: 'Photos in the band that scrolls sideways. Six or more works best.',
      of: [{ type: 'imageWithAlt' }],
      validation: (rule) => rule.min(2),
    }),

    defineField({ name: 'testimonialsHeading', title: 'Reviews, heading', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'testimonials',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({ name: 'quote', title: 'Review', type: 'text', rows: 5, validation: (rule) => rule.required() }),
            defineField({ name: 'who', title: 'Who wrote it', type: 'string', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'who', subtitle: 'quote' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'aboutTeaser',
      title: 'About preview',
      type: 'object',
      description: 'The short introduction near the bottom, linking to the about page.',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Small label above', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'body', title: 'Paragraph', type: 'text', rows: 4, validation: (rule) => rule.required() }),
        defineField({ name: 'ctaLabel', title: 'Link label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'image', title: 'Photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'followLabel',
      title: 'Follow banner label',
      type: 'string',
      description: 'The small line above the handle, e.g. FOLLOW ALONG.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { prepare: () => ({ title: 'Home page' }) },
})
