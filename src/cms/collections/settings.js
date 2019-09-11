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
  name: "Collections",
  label: 'customcollections',
  fields: [
    {
      label: "Collections",
      name: "collections",
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
                  label: 'Default',
                  name: "default",
                  widget: "string",
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
