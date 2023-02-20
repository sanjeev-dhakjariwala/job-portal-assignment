import React from "react";

const InputTwo = ({ required, label, placeholder1, placeholder2, name1, name2, inputType1, inputType2, onChange }) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="job-title"
          className="flex item-center block text-black-font font-bold text-sm mb-1"
        >
          <span>{label}</span>
          {required && <span className="text-red-600">*</span>}
        </label>
        <div className="flex">
          <div className="w-1/2 mr-6">
            <input
              type={inputType1}
              id={name1}
              name={name1}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={placeholder1}
              onChange={onChange}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type={inputType2}
              id={name2}
              name={name2}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={placeholder2}
              onChange={onChange}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputTwo;
