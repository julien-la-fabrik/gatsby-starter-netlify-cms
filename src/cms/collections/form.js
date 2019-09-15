
import { button } from './types/button';
import { styling } from './types/blockstyling';

export const form = {
  label: 'Form',
  name: 'form',
  folder: 'src/forms',
  create: true,
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default:'Form'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
    {
      label: 'Elements',
      name: 'elements',
      widget: 'list',
      types:[
        {
          label: 'Texte',
          name: 'text',
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
                  value:"Text",
                  label:"Short Text"
                },
                {
                  value:"TextArea",
                  label:"Text Area"
                },
                {
                  value:"Email",
                  label:"Email"
                },
                {
                  value:"Password",
                  label:"Password"
                },
              ]
            },
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
            },
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              required: false
            },
            styling
          ]
        }
      ]
    },
    button
  ],
};
