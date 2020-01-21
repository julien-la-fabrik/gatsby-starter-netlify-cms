import { image } from './image';
import { title } from './title';
import { container } from './container';
import { button } from './button';
import { text } from './text';


export const section = {
  label: 'Section',
  name: 'section',
  widget: 'object',
  fields: [
      {
        label: 'Identifiant',
        name: 'id',
        widget: 'string',
        required: false,
        default: ""
      },
    {
      label: 'Items',
      name: 'items',
      widget: 'list',
      types:[container,image,button,title,text]
    },
    {
      label: 'Style',
      name: 'style',
      widget: 'object',
      fields: [
        {
          label: 'Type',
          name: 'type',
          widget: 'select',
          options: [
            {
              label: "Pleine page",
              value: "full",
            },
            {
              label: "Contenu",
              value: "container",
            },
          ]
        },
        {
          label: 'Couleur arriere-plan',
          name: 'bg-color',
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
