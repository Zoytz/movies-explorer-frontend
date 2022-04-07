import React from 'react';
import headerLogo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const FormContainer = React.memo((props) => {

  return (
    <section className="form-container page__login">
      <Link to="/" className="form-container__logo-link page__link">
        <img className="logo" src={headerLogo} alt="Логотип" />
      </Link>
      {props.children}
      <p className='form-container__text'>{ props.footerText }<Link className='form-container__link page__link' to={ props.link }>{ props.footerLink }</Link></p>
    </section>
  )
})