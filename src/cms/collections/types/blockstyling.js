
export const blockstyling = {
  label: 'Style',
  name: 'style',
  widget: 'object',
  fields: [
    {
      label: 'Container Type',
      name: 'container',
      widget: 'select',
      options: [
        {
          value: "uk-width-1-1",
          label: "Full width"
        },
        {
          value: "uk-container",
          label: "Standard Container"
        },
      ]
    },
    {
      label: 'Identifiant',
      name: 'id',
      widget: 'string',
      required: false
    },
    {
      label: 'Class css',
      name: 'class',
      widget: 'string',
      required: false
    },
  ],
};


export const styling = {
  label: 'Style',
  name: 'style',
  widget: 'object',
  fields: [
    {
      label: 'Identifiant',
      name: 'id',
      widget: 'string',
      required: false
    },
    {
      label: 'Class css',
      name: 'class',
      widget: 'string',
      required: false
    },
  ],
};
