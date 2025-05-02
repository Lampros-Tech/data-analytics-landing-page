import { DocumentTextIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
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
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (in minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(60),
    }),
    // defineField({
    //   name: 'displayHeading',
    //   title: 'Display Heading',
    //   type: 'string',
    //   validation: Rule => Rule.required(),
    // }),
    // defineField({
    //   name: 'h2Heading',
    //   title: 'H2 Heading',
    //   type: 'string',
    //   validation: Rule => Rule.required(),
    // }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          icon: ImageIcon,
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
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
        defineArrayMember({
          name: 'table',
          title: 'Table',
          type: 'object',
          fields: [
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'header',
                      title: 'Column Header',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'cells',
                      title: 'Column Cells',
                      type: 'array',
                      of: [{ type: 'string' }],
                      validation: Rule => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      header: 'header',
                      cells: 'cells',
                    },
                    prepare({ header, cells }) {
                      return {
                        title: header || 'Column',
                        subtitle: cells ? `${cells.length} cells` : 'No cells',
                      }
                    },
                  },
                }),
              ],
              validation: Rule => Rule.required().min(1).max(3).error('Maximum 3 columns allowed'),
            }),
          ],
          preview: {
            select: {
              columns: 'columns',
            },
            prepare({ columns }) {
              const columnCount = columns?.length || 0;
              return {
                title: `📊 Table (${columnCount} columns)`,
              };
            },
          },
        }),
        defineArrayMember({
          name: 'codeBlock',
          title: 'Code Block',
          type: 'object',
          fields: [
            defineField({
              name: 'code',
              title: 'Code',
              type: 'text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'language',
              title: 'Language',
              type: 'string',
              options: {
                list: [
                  { title: 'JavaScript', value: 'javascript' },
                  { title: 'TypeScript', value: 'typescript' },
                  { title: 'Python', value: 'python' },
                  { title: 'Java', value: 'java' },
                  { title: 'C++', value: 'cpp' },
                  { title: 'HTML', value: 'html' },
                  { title: 'CSS', value: 'css' },
                  { title: 'SQL', value: 'sql' },
                  { title: 'JSON', value: 'json' },
                  { title: 'Markdown', value: 'markdown' },
                ],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'filename',
              title: 'Filename',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'filename',
              subtitle: 'language',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Code Block',
                subtitle: subtitle ? `Language: ${subtitle}` : 'Code Block',
              };
            },
          },
        }),
        defineArrayMember({
          name: 'blockquote',
          title: 'Blockquote',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Quote Text',
              type: 'text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),
            defineField({
              name: 'source',
              title: 'Source',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'author',
            },
            prepare({ title, subtitle }) {
              return {
                title: title ? title.substring(0, 50) + '...' : 'Blockquote',
                subtitle: subtitle ? `By ${subtitle}` : 'Blockquote',
              };
            },
          },
        }),
      ],
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "headingPairs",
      title: "Heading Pairs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "h2Heading",
              title: "H2 Heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "displayHeading",
              title: "Display Heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "h2Heading",
              subtitle: "displayHeading",
            },
          },
        }),

      ],
    }),

    defineField({
      name: "blogReference",
      title: "Blog Reference",
      type: "object",
      fields: [
        defineField({
          name: "post", 
          title: "Referenced Blog Post",
          type: "reference",
          to: [{ type: "post" }],
        }),
      ],
      preview: {
        select: {
          title: "post.ogTitle",
        },
        prepare({ title }) {
          return { title: `🔗 Blog Reference: ${title}` };
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})