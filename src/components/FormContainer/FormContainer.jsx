import React from 'react';
import headerLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const FormContainer = React.memo((props) => {

  return (
    <section className="form-container page__login">
      <Link to="/" className="form-container__logo-link">
        <img className="logo" src={headerLogo} alt="Место" />
      </Link>
      {props.children}
      <p className='form-container__text'>{ props.footerText }<Link className='form-container__link' to={ props.link }>{ props.footerLink }</Link></p>
    </section>
  )
})