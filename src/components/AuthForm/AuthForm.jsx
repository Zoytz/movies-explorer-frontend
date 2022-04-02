import React from "react";

export const AuthForm = React.memo((props) => {

  return (
    <form className={`form form_type_auth`} name='auth-form' noValidate>
      <div className="form__container">
        <h2 className="form__item form__title form__title_type_auth">{props.title}</h2>
        <label htmlFor="email" className="form__label form__label_type_auth">
          E-mail
          <input type="email" className={`form__input form__input_type_email form__input_type_auth`} name="email" id="email" minLength="2" maxLength="40" required />
          <span className={`form__input-error email-error`}></span>
        </label>

        <label htmlFor="password" className="form__label form__label_type_auth">
          Пароль
          <input type="password" className={`form__input form__input_type_password form__input_type_auth`} name="password" id="password" minLength="2" maxLength="200" required />
          <span className={`form__input-error password-error`}></span>
        </label>
      </div>
      <button type="submit" className={`form__item form__button form__button_type_auth`} value={props.buttonText} aria-label="Кнопка отправки формы">{props.buttonText}</button>
    </form>
  )
})