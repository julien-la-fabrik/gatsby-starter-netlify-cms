export const button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  fields: [
    {
      label: 'Label',
      name: 'label',
      widget: 'string',
      required: false,
      default: ""
    },
    {
      label: 'Lien',
      name: 'link',
      widget: 'string',
      required: false,
      default: ""
    },
    {
      label: 'icon',
      name: 'icon',
      widget: 'string',
      required: false,
      default: ""
    },
    {
      label: 'Position icone',
      name: 'icon-position',
      widget: 'select',
      options: [
        {
          value: "left",
          label: "Gauche"
        },
        {
          value: "right",
          label: "Droite"
        },
      ]
    },
    {
      label: 'Style',
      name: 'style',
      widget: 'object',
      fields: [
        {
          label: 'Taille',
          name: 'size',
          widget: 'select',
          options: [
            {
              label: "Petit",
              value: "s",
            },
            {
              label: "Grand",
              value: "l",
            },
            {
              label: "Très grand",
              value: "xl",
            },
          ]
        },
        {
          label: 'Identifiant',
          name: 'id',
          widget: 'string',
          required: false,
          default: ""
        },
        {
          label: 'Class css',
          name: 'class',
          widget: 'string',
          required: false,
          default: ""
        },
      ],
    }
  ],
};