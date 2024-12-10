import React, { Fragment } from "react";

interface Props{
    heading: string;
    inputFields: string[];
}

const Input = ({heading,inputFields}:Props) => {
  return (
    <Fragment>
        <h1 className="d-flex justify-content-center align-items-center p-4">{heading}</h1>
        {inputFields.map((fields,index) =>(
      <div className="form-floating mb-3" key={index}>
        <input type="email" className="form-control" id="floatingInput" placeholder={fields}></input>
        <label htmlFor="floatingInput">{fields}</label>
      </div>
      ))}
    </Fragment>
  );
};


export default Input;

