import React from "react";

export const FormInput = React.memo((props) => {

  return (
    <label htmlFor={props.type} className="form__label">
      {props.title}
      <input type={props.type} className="form__input" name={props.type} id={props.type} required />
      <span className={`form__input-error ${props.type}-error`}></span>
    </label>
  )
})