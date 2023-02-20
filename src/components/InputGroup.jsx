import React, { useState } from "react";

const InputGroup = ({
  required,
  label,
  placeholder,
  inputType,
  value,
  name,
  onChange,
}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor={name}
          className="flex item-center block text-black-font font-bold text-sm mb-1"
        >
          <span>{label}</span>
          {required && <span className="text-red-600">*</span>}
        </label>
        <input
          type={inputType}
          id={name}
          name={name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></input>
        {required && <span className="text-red-500 text-base">{`Enter ${name}`}</span>}
      </div>
    </div>
  );
};

export default InputGroup;
