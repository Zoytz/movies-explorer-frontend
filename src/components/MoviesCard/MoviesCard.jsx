import React from 'react';
import film from '../../images/film.png';
import { Link } from 'react-router-dom';

export const MoviesCard = React.memo((props) => {

  return (
    <li className="movies-card">
      <Link to="/" className="movies-card__link">
        <img src={film} alt="" className="movies-card__image" />
        <button className="movies-card__button">
          Сохранить
        </button>
      </Link>
      <div className="movies-card__info">
        <h2 className="movies-card__title">
          33 слова о дизайне
        </h2>
        <p className="movies-card__duration">
          1ч 17м
        </p>
      </div>
    </li>
  )
})