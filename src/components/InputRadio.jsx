import React from "react";

const InputRadio = (props) => {
  function handleOptionChange(event) {
    props.onOptionChange(event.target.value);
  }
  return (
    <div>
      <span className="text-black-font font-bold text-sm mb-2">Apply Type</span>
      <div className="form-radio-group">
        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="option1"
            checked={props.selectedOption === 'option1'}
            onChange={handleOptionChange}
          ></input>
          <span className="ml-2 text-sm text-greyFont">Quick apply</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="option2"
            checked={props.selectedOption === 'option2'}
            onChange={handleOptionChange}
          ></input>
          <span className="ml-2 text-sm text-greyFont">External Apply</span>
        </label>
      </div>
    </div>
  );
};

export default InputRadio;
