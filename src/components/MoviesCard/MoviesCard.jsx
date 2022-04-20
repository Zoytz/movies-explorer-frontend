import React from 'react';
export const MoviesCard = React.memo((props) => {

  const [ isOwn, setIsOwn ] = React.useState(false);

  let buttonClass = '';

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

  } else if (props.userMovies) {
    movie = props.currentMovie;
  }

  React.useEffect(() => {
    setIsOwn(props.savedMovies.some(savedMovie => Number(savedMovie.movieId) === movie.movieId));
  }, [props.savedMovies, isOwn, movie.movieId]);

  if (isOwn) {
    buttonClass = 'movies-card__button_type_selected';
  } else if (props.userMovies){
    buttonClass = 'movies-card__button_type_saved';
  } else if (!isOwn && !props.userMovies) {
    buttonClass = '';
  }

  let currentDuration = null;

  function getDurationFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return currentDuration = `${hours}ч ${minutes}м`;
  };

  getDurationFromMins(movie.duration);

  function movieButtonHandler() {
    if (props.userMovies) {
      props.handleDeleteMovie(movie._id);
      setIsOwn(false);
    } else {
      props.handleSaveMovie(movie);
    }
  }

  return (
    <li className="movies-card">
      <button disabled={isOwn} type='button' onClick={movieButtonHandler} className={`movies-card__button ${buttonClass}`}>
        Сохранить
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