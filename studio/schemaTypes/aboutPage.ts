import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
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
        defineField({ name: 'image', title: 'Header photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'intro',
      title: 'Opening paragraphs',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'first', title: 'First paragraph', type: 'text', rows: 4, validation: (rule) => rule.required() }),
        defineField({
          name: 'secondLead',
          title: 'Second paragraph',
          type: 'text',
          rows: 4,
          description: 'Ends where the highlighted line below picks up.',
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'secondHighlight', title: 'Highlighted line', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'third', title: 'Third paragraph', type: 'text', rows: 4, validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'band',
      title: 'Full-width line',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'lead', title: 'Line, first part', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'accent', title: 'Highlighted words', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'image', title: 'Background photo', type: 'imageWithAlt', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'closing',
      title: 'Closing paragraphs',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'first', title: 'First paragraph', type: 'text', rows: 4, validation: (rule) => rule.required() }),
        defineField({ name: 'second', title: 'Second paragraph', type: 'text', rows: 3, validation: (rule) => rule.required() }),
        defineField({ name: 'signature', title: 'Sign-off', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'signatureSub', title: 'Sign-off, second line', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Closing call to action',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'body', title: 'Line under it', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'primaryLabel', title: 'First button', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'secondaryLabel', title: 'Second button', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'About page' }) },
})
