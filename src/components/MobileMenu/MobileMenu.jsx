import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import profileLogo from '../../images/account.svg';
import closeIcon from '../../images/CloseIcon.svg';

const MobileMenu = React.memo((props) => {

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__container">
        <button className="mobile-menu__close-button"></button>
        <nav className="mobile-menu__navigation">
          <ul className="mobile-menu__items page__list">
            <li className="mobile-menu__item">
              <NavLink to="/" activeClassName="mobile-menu__link_active" className="mobile-menu__link">Главная</NavLink>
            </li>
            <li className="mobile-menu__item">
              <NavLink to="/movies" activeClassName="mobile-menu__link_active" className="mobile-menu__link">Фильмы</NavLink>
            </li>
            <li className="mobile-menu__item">
              <NavLink to="/saved-movies" activeClassName="mobile-menu__link_active" className="mobile-menu__link">Сохранённые фильмы</NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/profile" className="header__profile">
          <p className="header__profile-text">
            Аккаунт
          </p>
          <img src={profileLogo} alt="картинка профиля" className="header__profile-image" />
        </Link>
      </div>
    </div>
  );
})

export default MobileMenu;