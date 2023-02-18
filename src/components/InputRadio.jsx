import React from "react";

const InputRadio = () => {
  return (
    <div>
      <span className="text-black-font font-bold text-sm mb-2">Apply Type</span>
      <div class="form-radio-group">
        <label class="inline-flex items-center mr-6">
          <input
            type="radio"
            class="form-radio"
            name="option"
            value="option1"
          ></input>
          <span class="ml-2 text-sm text-greyFont">Quick apply</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio"
            name="option"
            value="option2"
          ></input>
          <span class="ml-2 text-sm text-greyFont">External Apply</span>
        </label>
      </div>
    </div>
  );
};

export default InputRadio;
