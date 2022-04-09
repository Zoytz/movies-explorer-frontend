import React from 'react';

export const NavTab = React.memo((props) => {

  return (
    <nav className="menu">
      <ul className="menu__items page__list">
        <li className="menu__item">
          <a href="#about-project" className="menu__link page__link">О проекте</a>
        </li>
        <li className="menu__item">
          <a href="#technologies" className="menu__link page__link">Технологии</a>
        </li>
        <li className="menu__item">
          <a href="#developer" className="menu__link page__link">Студент</a>
        </li>
      </ul>
    </nav>
  )
})