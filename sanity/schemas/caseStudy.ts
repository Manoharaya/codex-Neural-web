import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry / Sector',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tech',
      title: 'Technologies / Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Key Performance Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'metric',
          title: 'Metric Item',
          fields: [
            { name: 'value', title: 'Value (e.g. 0.9s, +35%)', type: 'string' },
            { name: 'label', title: 'Label (e.g. First Contentful Paint)', type: 'string' },
            { name: 'desc', title: 'Description details', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Screenshots / Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
