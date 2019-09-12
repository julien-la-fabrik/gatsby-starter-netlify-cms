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

function createField(name, label, obj, defaultToUse) {
  obj = obj || [];

  var defaultField = {
    label: 'Default',
    name: "default",
    widget: name,
    required: false
  };

  defaultToUse = defaultToUse || defaultField;
  console.log(defaultToUse);
  return {
    label: label,
    name: name,
    widget: 'object',
    fields: [
      ...commonFields,
      defaultToUse,
      {
        name: "widget",
        widget: "hidden",
        default: name,
      },
      ...obj
    ]
  };
}

var fieldTypes = [];

fieldTypes.push(createField('string', 'String'));
fieldTypes.push(createField('boolean', 'Boolean'));
fieldTypes.push(createField('text', 'Text'));
fieldTypes.push(createField('hidden', 'Hidden'));
fieldTypes.push(createField('markdown', 'Markdown'));

fieldTypes.push(createField('select', 'Select', [
  {
    label: 'Options',
    name: "options",
    widget: "list",

    fields: [
      {
        label: 'label',
        name: 'label',
        widget: 'string',
      },
      {
        label: 'Value',
        name: 'value',
        widget: 'string',
      }
    ]
  }], {
    label: 'Default',
    name: "default",
    widget: "string",
    required: false
  }));
fieldTypes.push(createField('select', 'Select Multiple', [
  {
    name: "multiple",
    widget: "hidden",
    default: true,
  },
  {
    label: 'Options',
    name: "options",
    widget: "list",

    fields: [
      {
        label: 'label',
        name: 'label',
        widget: 'string',
      },
      {
        label: 'Value',
        name: 'value',
        widget: 'string',
      }
    ]
  }], {
    label: 'Default',
    name: "default",
    widget: "list",
    required: false
  }));

fieldTypes.push(createField('number', 'Number', [{
  label: 'ValueType',
  name: "valueType",
  widget: "select",
  options: ['int', 'float'],
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
}]));



fieldTypes.push(createField('date', 'Date', [
  {
    label: 'Format',
    name: "format",
    widget: "string",
    hint: 'accepts Moment.js tokens (https://momentjs.com/docs/#/parsing/string-format/); defaults to raw Date object.',
    required: false
  },
  {
    label: 'DateFormat',
    name: "dateFormat",
    widget: "string",
    required: false
  },
  {
    label: 'TimeFormat',
    name: "timeFormat",
    widget: "string",
    required: false
  }]));
fieldTypes.push(createField('datetime', 'Date Time', [
  {
    label: 'Format',
    name: "format",
    widget: "string",
    hint: 'accepts Moment.js tokens (https://momentjs.com/docs/#/parsing/string-format/); defaults to raw Date object.',
    required: false
  },
  {
    label: 'DateFormat',
    name: "dateFormat",
    widget: "string",
    required: false
  },
  {
    label: 'TimeFormat',
    name: "timeFormat",
    widget: "string",
    required: false
  }]));
fieldTypes.push(createField('file', 'File'));
fieldTypes.push(createField('image', 'Image'));

var mapTypes = ['Point', 'LineString', 'Polygon'];
for (var mapType in mapTypes) {
  fieldTypes.push(createField('map', 'Map (' + mapTypes[mapType] + ')', [
    {
      label: 'Decimals',
      name: "decimals",
      widget: "number",
      required: false,
    }], {
      label: 'Default',
      name: "default",
      widget: "map",
      type: mapTypes[mapType],
      required: false
    }
  ));
}



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
          types: fieldTypes
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
