import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import profileLogo from '../../images/account.svg';

const MobileMenu = React.memo((props) => {

  return (
    <div className={`mobile-menu ${props.isMobileMenuOpen ? 'mobile-menu_active' : ''}`}>
      <div className="mobile-menu__container">
        <button onClick={props.handleMobileMenuOpen} className="mobile-menu__close-button"></button>
        <nav className="mobile-menu__navigation">
          <ul className="mobile-menu__items page__list">
            <li className="mobile-menu__item">
              <NavLink to="/" className="mobile-menu__link page__link">Главная</NavLink>
            </li>
            <li className="mobile-menu__item">
              <NavLink to="/movies" className="mobile-menu__link page__link">Фильмы</NavLink>
            </li>
            <li className="mobile-menu__item">
              <NavLink to="/saved-movies" className="mobile-menu__link page__link">Сохранённые фильмы</NavLink>
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
    </div>
  );
})

export default MobileMenu;