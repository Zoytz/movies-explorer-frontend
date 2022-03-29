import headerLogo from '../images/logo.png';
import { Route, Link, Routes } from 'react-router-dom';
import React from 'react';

const Header = React.memo((props) => {
  return (
    <Routes>
      <Route path="/sign-up" element={
        <header className="header page__header">
          <img className="logo" src={headerLogo} alt="Место" />
          <Link to="/sign-in" className="header__link">Войти</Link>
        </header>
      } />
      <Route path="/sign-in" element={
        <header className="header page__header">
          <img className="logo" src={headerLogo} alt="Место" />
          <Link to="/sign-up" className="header__link">Регистрация</Link>
        </header>
      } />
      <Route exact path="/" element={
        <header className="header page__header">
          <img className="logo" src={headerLogo} alt="Место" />
          <div className="header__info">
            <Link to="/sign-up" className="header__link">Регистрация</Link>
            <button onClick={props.handleLogout} className="header__button">Войти</button>
          </div>
        </header>
      } />
    </Routes>
  );
})

export default Header;