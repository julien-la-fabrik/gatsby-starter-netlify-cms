
export const blockstyling= {
  label: 'Style',
  name: 'style',
  widget: 'object',
  fields: [
  {
    label: 'Container Type',
    name: 'Cards',
    widget: 'select',
    options:[
      {
        value:"uk-width-1-1",
        label:"Full width"
      },
      {
        value:"uk-container",
        label:"Standard Container"
      },
    ]
  },
    {
      label: 'Identifiant',
      name: 'css-id',
      widget: 'string',
      required: false
    },
    {
      label: 'Class css',
      name: 'css-class',
      widget: 'string',
      required: false
    },
  ],
};
