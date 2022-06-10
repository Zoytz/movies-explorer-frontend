import React from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
export const MoviesCard = React.memo((props) => {

  const userInfo = React.useContext(CurrentUserContext);

  let movie = {};

  if (props.allMovies) {
    const {
      country,
      created_at,
      description,
      director,
      duration,
      id,
      image,
      nameEN,
      nameRU,
      trailerLink,
    } = props.currentMovie;

    movie.nameRU = nameRU;
    movie.nameEN = nameEN;
    movie.country = country;
    movie.director = director;
    movie.duration = duration;
    movie.year = created_at;
    movie.description = description;
    movie.image = `https://api.nomoreparties.co/${image.url}`;
    movie.trailerLink = trailerLink;
    movie.thumbnail = `https://api.nomoreparties.co/${image.url}`;
    movie.movieId = id;
    movie._id = props.currentMovie._id;

  } else if (props.userMovies) {
    movie = props.currentMovie;
  }

  let currentDuration = null;

  function getDurationFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return currentDuration = `${hours}ч ${minutes}м`;
  };

  getDurationFromMins(movie.duration);

  function handleLikeMovie() {
    if(props.isMovieSaved) {
      movie.owner = userInfo._id;
      props.handleDeleteMovie(movie);
    } else {
      props.handleSaveMovie(movie);
    } 
  }

  function handleDeleteMovie() {
    props.handleDeleteMovie(movie);
  }

  

  return (
    <li className="movies-card">
      <button onClick={handleLikeMovie} type='button' className={`movies-card__button ${props.isMovieSaved ? 'movies-card__button_type_selected' : ''} ${props.userMovies ? 'movies-card__button_inactive' : ''}`}>
        Сохранить
      </button>
      <button onClick={handleDeleteMovie} type='button' className={`movies-card__button ${props.allMovies ? 'movies-card__button_inactive' : 'movies-card__button_type_saved'}`}>
      </button>
      <a href={movie.trailerLink} className="movies-card__link page__link" target="_blank" rel="noreferrer">
        <img src={movie.image} alt="Картинка фильма" className="movies-card__image" />
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__title">
          {movie.nameRU}
        </h2>
        <p className="movies-card__duration">
          {currentDuration}
        </p>
      </div>
    </li>
  )
})