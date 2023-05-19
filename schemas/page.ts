import { PageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  icon: PageIcon,
  type: 'document',
  fields: [
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
        ]}
      ]
    })
  ],
})

