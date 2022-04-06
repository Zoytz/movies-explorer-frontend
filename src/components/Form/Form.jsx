import React from "react";

export const Form = React.memo((props) => {

  return (
    <form className="form" name={props.name} noValidate>
      <div className="form__container">
        <h2 className="form__title">{props.title}</h2>
        { props.children }
      </div>
      <button type="submit" className="form__button" value={props.buttonText} aria-label="Кнопка отправки формы">{props.buttonText}</button>
    </form>
  )
})