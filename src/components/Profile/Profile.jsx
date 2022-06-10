import React from 'react';

export const Profile = React.memo((props) => {

  return (
    <section className="profile">
      {props.children}
      <button onClick={props.handleLogout} className="profile__button">
        Выйти из аккаунта
      </button>
    </section>
  )
})