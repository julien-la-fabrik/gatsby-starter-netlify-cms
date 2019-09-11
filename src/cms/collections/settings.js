const menuFields = [{
  label: "Title",
  name: "title",
  widget: "string"
}, {
  label: "Path",
  name: "path",
  widget: "string"
}];

const commonFields = [{
  label: 'Label',
  name: "label",
  widget: "string",
},
{
  label: 'Name',
  name: "name",
  widget: "string",
},
{
  label: 'Required',
  name: "required",
  widget: "boolean",
  default: false,
}
];

const customCollections = {
  file: "src/settings/customcollections.json",
  extention: "json",
  name: "customcollections",
  label: 'Collections',
  fields: [
    {
      label: "Collections",
      name: "customcollections",
      widget: "list",
      fields: [
        {
          label: 'Label',
          name: "label",
          widget: "string",
        },
        {
          label: 'Name',
          name: "name",
          widget: "string",
        },
        {
          label: 'Description',
          name: "description",
          widget: "text",
          required: false
        },
        {
          label: 'Slug',
          name: "slug",
          widget: "string",
          required: false,
        },
        {
          label: 'Folder',
          name: "folder",
          widget: "string",
        },
        {
          label: 'Extension',
          name: "extension",
          widget: "select",
          options: ['yml', 'yaml', 'toml', 'json', 'md', 'markdown', 'html'],
          required: false
        },
        {
          label: 'Format',
          name: "format",
          widget: "select",
          options: ['yml', 'yaml', 'toml', 'json', 'frontmatter', 'yaml-frontmatter', 'toml-frontmatter', 'json-frontmatter'],
          required: false
        },
        {
          label: 'Create',
          name: "create",
          widget: "boolean",
        },
        {
          label: "Fields",
          name: "fields",
          widget: "list",
          types: [
            {
              label: 'String',
              name: 'string',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "string",
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "string",
                  required: false
                }
              ]
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "text",
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "string",
                  required: false
                }
              ]
            },
            {
              label: 'Boolean',
              name: 'boolean',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "boolean",
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "boolean",
                  required: false
                }
              ]
            },
            {
              label: 'Hidden',
              name: 'hidden',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "hidden",
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "string",
                  required: false
                }
              ]
            },
            {
              label: 'Markdown',
              name: 'markdown',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "markdown",
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "markdown",
                  required: false
                }
              ]
            },
            {
              label: 'Select',
              name: 'select',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "select",
                },
                {
                  label: 'Options',
                  name: "options",
                  widget: "list",
                  fields:[
                    {
                      label: 'label',
                    name: 'Label',
                    widget: 'string',
                  },
                  {
                    label: 'Value',
                  name: 'value',
                  widget: 'string',
                }
                  ]
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "list",
                  required: false
                }
              ]
            },
            {
              label: 'Number',
              name: 'number',
              widget: 'object',
              fields: [
                ...commonFields,
                {
                  name: "widget",
                  widget: "hidden",
                  default: "number",
                },
                {
                  label: 'ValueType',
                  name: "valueType",
                  widget: "select",
                  options:['int','float'],
                  required: false
                },
                {
                  label: 'Min',
                  name: "min",
                  widget: "number",
                  required: false
                },
                {
                  label: 'Max',
                  name: "max",
                  widget: "number",
                  required: false
                },
                {
                  label: 'Step',
                  name: "step",
                  widget: "number",
                  required: false
                },
                {
                  label: 'Default',
                  name: "default",
                  widget: "number",
                  required: false
                }
              ]
            },
          ]
        }
      ]
    }
  ]
};

export const settings = {
  label: 'Settings',
  name: 'settings',
  editor: { preview: false },
  files: [
    customCollections,
    {
      file: "src/settings/theme.json",
      extention: "json",
      name: "theme",
      label: 'Theme',
      fields: [{
        label: "Title",
        name: "title",
        widget: "hidden",
        default: "theme"
      },
      {
        label: "Logo",
        name: "logo",
        widget: "image"
      },
      {
        label: "Primary Brand Color",
        name: "brandcolorprimary",
        widget: "string",
        default: "#ff4400"
      },
      {
        label: "Secondary Brand Color",
        name: "brandcolorsecondary",
        widget: "string",
        default: "#ff4400"
      },
      {
        label: "Menu top Type",
        name: "menutopbartype",
        widget: "select",
        options: ["normal", "sticky"]
      },
      ]
    },
    {
      file: "src/settings/menus.json",
      extention: "json",
      name: "menus",
      label: "Menus",
      fields: [{
        label: "Title",
        name: "title",
        widget: "hidden",
        default: "menus"
      },
      {
        label: "Main Menu Top",
        name: "mainmenu",
        widget: "list",
        fields: menuFields
      },
      {
        label: "Menu Footer",
        name: "footermenu",
        widget: "list",
        fields: menuFields
      },
      ]
    },
    {
      file: "src/settings/siteinfos.json",
      extention: "json",
      label: "Site Informations",
      name: "siteinfos",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "hidden",
          default: "siteinfos"
        },
        {
          label: "Site name",
          name: "sitename",
          widget: "string",
          default: ""
        },
        {
          label: "Description",
          name: "description",
          widget: "text",
        },
        {
          label: "Google Analitics code",
          name: "gacode",
          widget: "string",
        },
        {
          label: "Logo",
          name: "logo",
          widget: "image",
        },
      ]
    },
  ]
};
