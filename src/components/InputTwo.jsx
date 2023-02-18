import React from "react";

const InputTwo = ({ required, label, placeholder1, placeholder2 }) => {
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
        <div class="flex">
          <div class="w-1/2 mr-6">
            <input
              type="text"
              id="job-title"
              name="job-title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={placeholder1}
            ></input>
          </div>
          <div class="w-1/2">
            <input
              type="text"
              id="job-title"
              name="job-title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={placeholder2}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputTwo;
