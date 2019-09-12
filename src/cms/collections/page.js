import {blockcards} from './types/blockcards'
import {blockimages} from './types/blockimages'

export const page = {
  label: 'Page',
  name: 'page',
  folder: 'src/pages',
  create: true,
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default:'page'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
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
      label: 'Sections',
      name: 'sections',
      widget: 'list',
      types:[
        blockimages,
        blockcards
      ]
    },
  ],
};
