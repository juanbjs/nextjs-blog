const fields = [
  {
    id: "category",
    label: "Categorias",
    value: "",
    align: "right",
    showOnTable: false,
    type: "text",
    defaultValue: "",
    showOnForm: false,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  },
  {
    id: "author",
    label: "Autor",
    value: "",
    align: "right",
    showOnTable: true,
    type: "text",
    defaultValue: "",
    showOnForm: false,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  },
  {
    id: "title",
    label: "Titulo",
    value: "",
    align: "right",
    showOnTable: true,
    type: "text",
    defaultValue: "",
    showOnForm: true,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  },
  {
    id: "description",
    label: "Descripción",
    value: "",
    align: "right",
    showOnTable: false,
    type: "text",
    defaultValue: "",
    showOnForm: true,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  },
  {
    id: "url",
    label: "URL",
    value: "",
    align: "right",
    showOnTable: false,
    type: "url",
    defaultValue: "",
    showOnForm: true,
    searchable: true,
    format: "",
    selectLabel: "",
    require: false,
    data: [],
  },
  {
    id: "urlToImage",
    label: "URL de Imagen",
    value: "",
    align: "right",
    showOnTable: false,
    type: "url",
    defaultValue: "",
    showOnForm: true,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  },
  {
    id: "content",
    label: "Contenido",
    value: "",
    align: "right",
    showOnTable: false,
    type: "wysiwyg",
    defaultValue: "",
    showOnForm: true,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  },
  {
    id: "publishedAt",
    label: "Fecha de publicación",
    value: "",
    align: "left",
    showOnTable: true,
    type: "fullDate",
    defaultValue: "",
    showOnForm: false,
    searchable: true,
    format: "",
    selectLabel: "",
    require: true,
    data: [],
  }
];

export const entityConfiguration = {
  entity: "",
  title: "Posts",
  url: "",
  fields: Array.from(fields),
}
