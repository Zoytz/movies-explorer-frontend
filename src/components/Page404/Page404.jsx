import React from 'react';
import { Link } from 'react-router-dom';

export const Page404 = React.memo((props) => {

  return (
    <section className="not-found-page">
      <div className="not-found-page__info">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found-page__link">
        Назад
      </Link>
    </section>
  )
})