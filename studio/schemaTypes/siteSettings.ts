import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  description: 'Everything that appears on every page: the name, phone, email and social links.',
  fields: [
    defineField({ name: 'name', title: 'Business name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Shown under the logo in the footer.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      description: 'Written the way it should read, e.g. (949) 345-0434. The tap-to-call link is built from it.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'email', title: 'Email address', type: 'string', validation: (rule) => rule.required().email() }),
    defineField({
      name: 'serviceArea',
      title: 'Service area',
      type: 'string',
      description: 'The line in the footer, e.g. "Serving Orange County & surrounding areas".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialHandle',
      title: 'Social handle',
      type: 'string',
      description: 'The one handle shown on the follow banner, e.g. @rememberwhen.pb.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'array',
      description: 'Instagram and TikTok get their own icon. Any other name shows as text.',
      of: [
        {
          type: 'object',
          name: 'social',
          fields: [
            defineField({ name: 'label', title: 'Platform', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'url', title: 'Link', type: 'url', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'url' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
})
