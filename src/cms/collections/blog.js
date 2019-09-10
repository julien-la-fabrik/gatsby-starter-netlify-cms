// import { seo } from '../partials/seo';

export const blog = {
  label: 'Blog',
  name: 'blog',
  folder: 'src/pages/blog',
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  create: true,
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default:'blog-post'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
    },
  ],
};
