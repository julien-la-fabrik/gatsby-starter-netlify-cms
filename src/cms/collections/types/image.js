
import { styling } from './blockstyling';
import { button } from './button';
export const image = {
  label: 'Image',
  name: 'ImageBlock',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Alt',
      name: 'alt',
      widget: 'string',
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      required: false
    },
    button,
    styling
  ],
};
