import React from 'react';
import headerLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const Login = React.memo((props) => {

  return (
    <section className="login page__login">
      <Link to="/" className="login__logo-link">
        <img className="logo" src={headerLogo} alt="Место" />
      </Link>
      {props.children}
      <p className='login__text'>Ещё не зарегистрированы?<Link className='login__link' to='/sign-up'>Регистрация</Link></p>
    </section>
  )
})