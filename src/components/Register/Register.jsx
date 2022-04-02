import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.png';

export const Register = React.memo((props) => {

  return (
    <section className="login page__login">
      <Link to="/" className="login__logo-link">
        <img className="logo" src={headerLogo} alt="Место" />
      </Link>
      {props.children}
      <p className='login__text'>Уже зарегистрированы?<Link className='login__link' to='/sign-in'>Войти</Link></p>
    </section>
  )
});