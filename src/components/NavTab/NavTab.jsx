import React from 'react';
import { Link } from 'react-router-dom';

export const NavTab = React.memo((props) => {

  return (
    <nav className="menu">
      <ul className="menu__items page__list">
        <li className="menu__item">
          <a href="#about-project" className="menu__link">О проекте</a>
        </li>
        <li className="menu__item">
          <a href="#technologies" className="menu__link">Технологии</a>
        </li>
        <li className="menu__item">
          <a href="#developer" className="menu__link">Студент</a>
        </li>
      </ul>
    </nav>
  )
})