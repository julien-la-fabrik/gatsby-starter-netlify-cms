
import { styling } from './blockstyling';
import { button } from './button';
export const cards = {
  label: 'Card',
  name: 'CardBlock',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      required: false
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false
    },
    button,
    styling
  ],
};
