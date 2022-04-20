import React from "react";

export const FormInput = React.memo((props) => {

  return (
    <label htmlFor={props.type} className="form__label">
      {props.title}
      <input value={props.value} onChange={props.handleChange} type={props.type} className="form__input" name={props.type} id={props.type} minLength={`${props.minL}` || ''} maxLength={`${props.maxL}`  || ''} required />
      <span className={`form__input-error ${props.isFormValid ? '' : 'form__input-error_active'}`}>{props.error}</span>
    </label>
  )
})