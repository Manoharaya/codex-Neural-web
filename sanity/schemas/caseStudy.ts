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
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Summary Description',
      type: 'text',
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
    }),
    defineField({
      name: 'results',
      title: 'Results & Impact',
      type: 'text',
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
