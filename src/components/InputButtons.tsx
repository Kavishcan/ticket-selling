import React, { Fragment } from "react";

interface Props {
  buttonFields: string[];
  buttonInputs: string[];
}

const InputButtons = ({ buttonFields,buttonInputs }: Props) => {
  return (
    <Fragment>
      {buttonFields.map((field, index) => (
        <div className="input-group input-group-lg mt-3" key={index}>
          <input
            type="text"
            className="form-control"
            placeholder={buttonInputs[index]}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-lg"
          />
          <button className="btn btn-dark ">{buttonFields[index]}</button>
        </div>
        
      ))}
    </Fragment>
  );
};

export default InputButtons;
