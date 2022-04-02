import React from "react";

export const ProfileForm = React.memo((props) => {

  return (
    <form className="profile__form">
      <h2 className="profile__form-title">
        Привет, Виталий!
      </h2>
      <div className="profile__form-body">
        <div className="profile__labels">
          <label htmlFor="" className="profile__label">
            Имя
            <input value="Виталий" type="text" className="profile__input" />
          </label>
          <label htmlFor="" className="profile__label">
            E-mail
            <input value="pochta@yandex.ru" type="email" className="profile__input" />
          </label>
        </div>
        <button className="profile_form-button">
          Редактировать
        </button>
      </div>
    </form>
  )
})