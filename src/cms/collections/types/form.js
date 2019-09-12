
export const form = {
  label: 'Form',
  name: 'FormBlock',
  widget: 'object',
  fields: [
    {
      label: 'Form item',
      name: 'formitem',
      widget: 'relation',
      collection: 'form',
      searchFields: 'title',
      valueField: 'title'
    },
  ],
};
