import headerLogo from '../../images/logo.svg';
import { Route, NavLink, Link, Routes } from 'react-router-dom';
import React from 'react';
import profileLogo from '../../images/account.svg';

const Header = React.memo((props) => {
  return (
    <Routes>
      < Route exact path="/" element={
        <header className="header page__header" >
          <Link to="/" className="header__link page__link">
            <img className="logo" src={headerLogo} alt="Логотип" />
          </Link>
          <div className="header__info">
            <Link to="/sign-up" className="header__link page__link">
              Регистрация
            </Link>
            <Link to="/sign-in" className="header__button page__link">
              Войти
            </Link>
          </div>
        </header >
      } />

      < Route path="/movies" element={
        <header className="header page__header header_theme_white" >
          <Link to="/" className="header__link page__link">
            <img className="logo" src={headerLogo} alt="Логотип" />
          </Link>
          <div className="header__info header__info_theme_white">
            <nav className="header__menu">
              <ul className="header__menu-items page__list">
                <li className="header__menu-item">
                  <NavLink to="/movies" className="header__menu-link header__menu-link_active page__link">Фильмы</NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/saved-movies" className="header__menu-link page__link">Сохранённые фильмы</NavLink>
                </li>
              </ul>
            </nav>
            <Link to="/profile" className="header__profile page__link">
              <p className="header__profile-text">
                Аккаунт
              </p>
              <img src={profileLogo} alt="Картинка профиля" className="header__profile-image" />
            </Link>
          </div>
          <button onClick={props.handleMobileMenuOpen} className="header__menu-button"></button>
        </header >
      } />

      < Route path="/saved-movies" element={
        <header className="header page__header header_theme_white" >
          <Link to="/" className="header__link page__link">
            <img className="logo" src={headerLogo} alt="Логотип" />
          </Link>
          <div className="header__info header__info_theme_white">
            <nav className="header__menu">
              <ul className="header__menu-items page__list">
                <li className="header__menu-item">
                  <NavLink to="/movies" className="header__menu-link page__link">Фильмы</NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/saved-movies" className="header__menu-link header__menu-link_active page__link">Сохранённые фильмы</NavLink>
                </li>
              </ul>
            </nav>
            <Link to="/profile" className="header__profile page__link">
              <p className="header__profile-text">
                Аккаунт
              </p>
              <img src={profileLogo} alt="Картинка профиля" className="header__profile-image" />
            </Link>
          </div>
          <button onClick={props.handleMobileMenuOpen} className="header__menu-button"></button>
        </header >
      } />

      < Route path="/profile" element={
        <header className="header page__header header_theme_white" >
          <Link to="/" className="header__link page__link">
            <img className="logo" src={headerLogo} alt="Логотип" />
          </Link>
          <div className="header__info header__info_theme_white">
            <nav className="header__menu">
              <ul className="header__menu-items page__list">
                <li className="header__menu-item">
                  <NavLink to="/movies" className="header__menu-link page__link">Фильмы</NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/saved-movies" className="header__menu-link page__link">Сохранённые фильмы</NavLink>
                </li>
              </ul>
            </nav>
            <Link to="/profile" className="header__profile page__link">
              <p className="header__profile-text">
                Аккаунт
              </p>
              <img src={profileLogo} alt="Картинка профиля" className="header__profile-image" />
            </Link>
          </div>
          <button className="header__menu-button"></button>
        </header >
      } />

      < Route path="*" element={
        <>
        </>
      } />

    </Routes >
  );
})

export default Header;