import React from "react";

export const RegisterForm = React.memo((props) => {

  return (
    <form onSubmit className={`form form_type_auth`} name='register-form' noValidate>
      <div className="form__container">
        <h2 className="form__item form__title form__title_type_register">{props.title}</h2>

        <label htmlFor="name" className="form__label form__label_type_register">
          Имя
          <input type="name" className="form__input form__input_type_name form__input_type_register" name="name" id="name" minLength="2" maxLength="40" required />
          <span className="form__input-error name-error" ></span>
        </label>

        <label htmlFor="email" className="form__label form__label_type_register">
          E-mail
          <input type="email" className="form__input form__input_type_email form__input_type_register" name="email" id="email" minLength="2" maxLength="40" required />
          <span className="form__input-error email-error"></span>
        </label>

        <label htmlFor="password" className="form__label form__label_type_register">
          Пароль
          <input type="password" className="form__input form__input_type_password form__input_type_register" name="password" id="password" minLength="2" maxLength="200" required />
          <span className="form__input-error password-error"></span>
        </label>
      </div>
      <button type="submit" className="form__item form__button form__button_type_register" value={props.buttonText} aria-label="Кнопка отправки формы">{props.buttonText}</button>
    </form>
  )
})