import { defineField, defineType } from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Header',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'eyebrow', title: 'Small label above', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'lead', title: 'Line under the title', type: 'text', rows: 3, validation: (rule) => rule.required() }),
        defineField({ name: 'image', title: 'Header photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'tiers',
      title: 'Packages',
      type: 'array',
      description: 'The full breakdown. The home page shows a short version of the same list.',
      of: [
        {
          type: 'object',
          name: 'tier',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'price', title: 'Price', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'unit', title: 'What the price covers', type: 'string', validation: (rule) => rule.required() }),
            defineField({
              name: 'basedOn',
              title: 'Builds on the package before it',
              type: 'string',
              description: 'Optional line above the list, e.g. EVERYTHING IN CLASSIC, PLUS:',
            }),
            defineField({
              name: 'features',
              title: 'What is included',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (rule) => rule.min(1),
            }),
            defineField({ name: 'note', title: 'Small print', type: 'text', rows: 2 }),
            defineField({ name: 'popular', title: 'Show the "most popular" badge', type: 'boolean', initialValue: false }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'band',
      title: 'Full-width line',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'line', title: 'Line, first part', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'accent', title: 'Highlighted words', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'image', title: 'Background photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'addonsIntro',
      title: 'Add-ons, heading',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Small label above', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: 'addons',
      title: 'Add-ons',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'addon',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'price', title: 'Price', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, validation: (rule) => rule.required() }),
            defineField({ name: 'image', title: 'Photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'name', subtitle: 'price', media: 'image' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'cta',
      title: 'Closing call to action',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'body', title: 'Line under it', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'primaryLabel', title: 'Button label', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Services page' }) },
})
