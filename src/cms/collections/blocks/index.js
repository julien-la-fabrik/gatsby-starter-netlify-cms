import { section } from './section';

export const blocks = {
  label: 'Page Block',
  name: 'blockpage',
  folder: 'src/pages',
  create: true,
  editor: { preview: true },
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default:'blockpage'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      required: false,
    },
    {
      label: 'Sections',
      name: 'sections',
      widget: 'list',
      fields:section.fields
    },
  ],
};
