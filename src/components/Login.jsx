import React from 'react';
import headerLogo from '../images/logo.png';
import { Link } from 'react-router-dom';

export const Login = React.memo((props) => {

return (
  <section className="login page__login">
    <img className="login__logo" src={headerLogo} alt="Логотип" />
    {props.children}
    <p className='login__text'>Ещё не зарегистрированы?<Link className='login__link' to='/sign-up'>Регистрация</Link></p>
  </section>
)
})