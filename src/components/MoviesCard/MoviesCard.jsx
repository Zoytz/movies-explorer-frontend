import React from 'react';
import film from '../../images/film.png';
import { Link } from 'react-router-dom';

export const MoviesCard = React.memo((props) => {

  return (
    <li className="movies-card">
      <Link to="/" className="movies-card__link page__link">
        <img src={film} alt="Картинка фильма" className="movies-card__image" />
        <button className={`movies-card__button ${props.isSavedMovie ? 'movies-card__button_type_saved' : ''}`}>
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