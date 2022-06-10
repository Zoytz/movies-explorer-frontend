import React from 'react';
import arrow from '../../images/arrow.svg';

export const Portfolio = React.memo((props) => {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      {/* <a target="_blank" rel="noreferrer" href="https://zoytz.github.io/how-to-learn/" className="portfolio__link page__link">
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </a> */}
      <a target="_blank" rel="noreferrer" href="https://zoytz.github.io/russian-travel/" className="portfolio__link page__link">
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://zoytz.github.io/mesto/" className="portfolio__link page__link">
        <p className="portfolio__text">Одностраничное приложение</p>
        <img src={arrow} alt="Стрелка перехода" className="portfolio__image" />
      </a>
    </section >
  )
})