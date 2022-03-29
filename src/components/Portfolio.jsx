import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow.svg';

export const Portfolio = React.memo((props) => {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Link to="#" className="portfolio__link">
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </Link>
      <Link to="#" className="portfolio__link">
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </Link>
      <Link to="#" className="portfolio__link">
        <p className="portfolio__text">Одностраничное приложение</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </Link>
    </section >
  )
})