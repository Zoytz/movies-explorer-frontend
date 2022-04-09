import React from 'react';

export const SearchForm = React.memo((props) => {

  return (
    <form className="search-form" name='film-form' noValidate>
      <div className="search-form__container">
        <input placeholder='Фильм' type="text" className="search-form__input" name="film" id="film" required />
        <button type="submit" className="search-form__button" aria-label="Кнопка отправки формы">
        </button>
      </div>
      <label htmlFor="film-checkbox" className={`search-form__label ${props.isShortMovie ? 'search-form__label_active' : ''}`}>
        <input checked={props.isShortMovie} onChange={props.handleFilterMovies} className="search-form__checkbox" type="checkbox" name="film-checkbox" id="film-checkbox" />
        <span className="search-form__custom-checkbox"></span>
      </label>
    </form>
  )
})