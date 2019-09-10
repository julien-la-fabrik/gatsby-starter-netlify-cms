
export const form = {
  label: 'Form',
  name: 'form',
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
