import React from 'react';
import { Link } from 'react-router-dom';

export const NavTab = React.memo((props) => {

  return (
    <nav className="menu">
      <ul className="menu__items page__list">
        <li className="menu__item">
          <Link to="/sign-in" className="menu__link">О проекте</Link>
        </li>
        <li className="menu__item">
          <Link to="/sign-in" className="menu__link">Технологии</Link>
        </li>
        <li className="menu__item">
          <Link to="/sign-in" className="menu__link">Студент</Link>
        </li>
      </ul>
    </nav>
  )
})