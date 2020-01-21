import { image } from './image';
import { title } from './title';
import { button } from './button';
import { text } from './text';

export const container = {
  label: 'Conteneur',
  name: 'container',
  widget: 'object',
  fields: [
    {
      label: 'Items',
      name: 'items',
      widget: 'list',
      types:[image,button,title,text]
    },
    {
      label: 'Style',
      name: 'style',
      widget: 'object',
      fields: [
      {
        label: 'Largeur',
        name: 'width',
        widget: 'list',
      },
      {
        label: 'Alignement',
        name: 'textAliment',
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
          {
            value: "center",
            label: "Centre"
          },
        ]
      },
      ],
    }
  ],
};
