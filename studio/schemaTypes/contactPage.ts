import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
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
      name: 'featureImage',
      title: 'Photo beside the form',
      type: 'imageWithAlt',
      description: 'The phone number, email and social links sit on top of this photo.',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'form',
      title: 'Form wording',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'submitLabel', title: 'Send button', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'sendingLabel', title: 'Send button while sending', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'sentMessageLead', title: 'Thank you, first line', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'sentMessageBody', title: 'Thank you, second line', type: 'string', validation: (rule) => rule.required() }),
        defineField({
          name: 'errorMessage',
          title: 'If sending fails',
          type: 'string',
          description: 'Shown with a link that opens the visitor’s email app instead.',
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'errorLinkLabel', title: 'Label for that link', type: 'string', validation: (rule) => rule.required() }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Contact page' }) },
})
