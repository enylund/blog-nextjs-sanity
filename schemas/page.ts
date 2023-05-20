import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [
        {
          name: "hero",
          type: "object",
          title: "Hero",
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading'
            },
            {
              name: 'tagline',
              type: 'string',
              title: 'Tagline'
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                }
              ]
            }
          ]
        },
        { 
          name: "callToAction",
          type: "object",
          title: "Call to Action",
          fields: [
            {
              name: 'linkText',
              type: 'string',
              title: 'Link Text'
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL'
            }
          ]
        },
        {
          name: "video",
          type: "object",
          title: "Video",
          fields: [
            {
              name: 'videoLabel',
              type: 'string',
              title: 'Video Label'
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL'
            },
          ]
        }
      ]
    })
  ],
})