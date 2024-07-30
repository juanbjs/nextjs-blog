export interface Field {
  id: string;
  label: string;
  value: string;
  align: string;
  showOnTable: Boolean;
  type: string;
  defaultValue: string;
  showOnForm: boolean;
  searchable: boolean;
  format: string;
  selectLabel: string;
  require: boolean;
  data: Array<any>;
}

export interface EntityConfiguration {
  entity: string;
  title: string;
  url: string;
  fields: Array<Field>,
}
