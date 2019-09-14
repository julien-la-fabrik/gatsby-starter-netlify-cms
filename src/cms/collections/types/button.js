
import { styling } from './blockstyling';
export const button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  fields: [
    {
      label: 'Label',
      name: 'label',
      widget: 'string',
      required: false
    },
    {
      label: 'Link',
      name: 'link',
      widget: 'string',
      required: false
    },
    styling
  ],
};
