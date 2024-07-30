import React from "react";

import TextField from "@/components/FormElements/TextField";
import WysiwygField from "@/components/FormElements/WysiwygField";

export const getFieldType = (type, field, formik) => {
  switch (type) {
    case "wysiwyg":
      return (
        <div
          key={`get-field-type-${field.id}`}
        >
          <WysiwygField
            setFieldValue={(val) => formik.setFieldValue(field.id, val)}
            value={formik.values[field.id]}
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
            onChange={formik.handleChange}
            value={formik.values[field.id]}
            placeholder={field.label}
            required={field.require}
            autoFocus={true}
          />
          {formik.errors[field.id] && <div>{formik.errors[field.id]}</div>}
        </div>
      );
  }
};
