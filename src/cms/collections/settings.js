import { collections } from './settings/collections';

const menuFields = [{
  label: "Title",
  name: "title",
  widget: "string"
}, {
  label: "Path",
  name: "path",
  widget: "string"
}];


export const settings = {
  label: 'Settings',
  name: 'settings',
  editor: { preview: false },
  files: [
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

      {
        label: "404 page Title",
        name: "title404",
        widget: "string",
        default: "NOT FOUND"
      },
      {
        label: "404 page Message",
        name: "message404",
        widget: "text",
        default: "You just hit a route that doesn't exist... the sadness."
      },
    ]
  },
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
      collections,
  ]
};
