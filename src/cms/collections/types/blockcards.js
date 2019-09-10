import { image } from './image';
import { cards } from './cards';
import { form } from './form';
import { blockstyling } from './blockstyling';


export const blockcards = {
  label: 'Block Cards',
  name: 'blockcards',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'select',
      options:[
        {
          value:"Columns",
          label:"Columns"
        },
        {
          value:"Accordion",
          label:"Accordion"
        },
      ]
    },
    {
      label: 'Cards',
      name: 'Cards',
      widget: 'list',
      types:[cards,form,image]
    },
    blockstyling,
  ],
};
