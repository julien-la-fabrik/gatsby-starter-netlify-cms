export const image = {
  label: 'Image',
  name: 'image',
  widget: 'object',
  fields: [
    {
      label: 'Titre',
      name: 'alt',
      widget: 'string',
      required: true,
      default: ""
    },
    {
      label: 'Image',
      name: 'src',
      widget: 'image',
      required: false,
      default: ""
    },
  ],
};
