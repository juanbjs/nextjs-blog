import React from "react";

import { FormikErrors, FormikValues } from "formik";

import TextField from "@/components/FormElements/TextField";
import WysiwygField from "@/components/FormElements/WysiwygField";
import { Field } from "@/model/EntityConfiguration";


interface FieldTypeProps {
  type: string;
  field: Field;
  values: Record<string, any>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<FormikValues>;
  setFieldValue: (field: string, value: any) => void;
}

export function FormFields({type, field, values, handleChange, errors, setFieldValue} : FieldTypeProps) {
  
  switch (type) {
    case "wysiwyg":
      return (
        <div
          key={`get-field-type-${field.id}`}
        >
          <WysiwygField
            setFieldValue={(val) => setFieldValue(field.id, val)}
            value={values[field.id]}
            label={field.label}
          />
        </div>
      );
    default:
      return (
        <div
          key={`get-field-type-${field.id}`}
        >
          <TextField
            id={field.id}
            label={field.label}
            onChange={handleChange}
            value={values[field.id]}
            placeholder={field.label}
            required={field.require}
            autoFocus={true}
          />
          {errors[field.id] && <div>{errors[field.id]}</div>}
        </div>
      );
  }
};