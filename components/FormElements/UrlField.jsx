import React from "react";
import PropTypes from 'prop-types';

UrlField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool
}

export default function UrlField({label, onChange, value, placeholder, id, required, autoFocus}){
  return (
    <div>
      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor="title"
      >
        {label}
      </label>
      <input
        id ={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        type="text"
        required={required}
        autoFocus={autoFocus}
      />
    </div>
  )
}