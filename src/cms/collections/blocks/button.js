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
          label: 'Couleur',
          name: 'size',
          widget: 'select',
          options: [
            {
              label: "Primaire",
              value: "primary",
            },
            {
              label: "Secondaire",
              value: "secondary",
            },
            {
              label: "Danger",
              value: "danger",
            },
            {
              label: "Succes",
              value: "success",
            },
            {
              label: "Blanc",
              value: "white",
            },
            {
              label: "Noir",
              value: "black",
            },
          ]
        },
      ],
    }
  ],
};