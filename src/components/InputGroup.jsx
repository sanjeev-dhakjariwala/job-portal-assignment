import React from "react";

const InputGroup = ({ required, label, placeholder, inputType }) => {
  return (
    <div>
      <div className="mb-6">
        <label
          for="job-title"
          class="flex item-center block text-black-font font-bold text-sm mb-1"
        >
          <span>{label}</span>
          {required && <span className="text-red-600">*</span>}
        </label>
        <input
          type={inputType}
          id="job-title"
          name="job-title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
        ></input>
      </div>
    </div>
  );
};

export default InputGroup;
