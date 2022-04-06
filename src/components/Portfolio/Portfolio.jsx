import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg';

export const Portfolio = React.memo((props) => {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a target="_blank" href="https://zoytz.github.io/mesto/" className="portfolio__link">
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </a>
      <a target="_blank" href="https://zoytz.github.io/mesto/" className="portfolio__link">
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </a>
      <a target="_blank" href="https://zoytz.github.io/mesto/" className="portfolio__link">
        <p className="portfolio__text">Одностраничное приложение</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </a>
    </section >
  )
})