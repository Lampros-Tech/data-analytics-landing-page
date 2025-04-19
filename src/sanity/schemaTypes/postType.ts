import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['https', 'http'] }),
    }),
    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ogUrl',
      title: 'OG URL',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['https', 'http'] }),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (in minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(60),
    }),
    defineField({
      name: 'displayHeading',
      title: 'Display Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'h2Heading',
      title: 'H2 Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      // of: [
      //   { type: 'block' },
      //   { type: 'youtubeEmbed' }, // YouTube section support
      // ],
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          name: "youtube",
          title: "YouTube Video",
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "YouTube URL",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https"],
                  allowRelative: false,
                }).required(),
            }),
          ],
          preview: {
            select: { title: "url" },
            prepare({ title }) {
              return { title: `📹 YouTube Video: ${title}` };
            },
          },
        }),
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
