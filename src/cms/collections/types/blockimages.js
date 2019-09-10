import { image } from './image';
import { blockstyling } from './blockstyling';

export const blockimages = {
  label: 'Block Images',
  name: 'blockimages',
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
          value:"Carousel",
          label:"Carousel"
        },
        {
          value:"Slider",
          label:"Slider"
        },
        {
          value:"SliderHero",
          label:"Slider Hero"
        },
        {
          value:"Gallery",
          label:"Gallery"
        },
      ]
    },
    {
      label: 'Images',
      name: 'images',
      widget: 'list',
      fields:image.fields
    },
    blockstyling,
  ],
};
