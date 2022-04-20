import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export const SearchForm = React.memo((props) => {

  const { values, handleChange, isFormValid, resetForm } = useFormWithValidation();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitSearchMovie(values, props.isShortMovie);
  }

  React.useEffect(() => {
    resetForm({[props.type]: props.moviesSearchQuery}, {}, true)
  }, [props.moviesSearchQuery]);

  return (
    <form onSubmit={handleSubmit} className="search-form" name={`${props.type}-form`} noValidate>
      <div className="search-form__container">
        <input value={values[props.type] || ''} onChange={handleChange} placeholder='Фильм' type="text" className="search-form__input" name={`${props.type}`} id={`${props.type}-search`} minLength="2" maxLength="40" required />
        <button type="submit" className="search-form__button" aria-label="Кнопка отправки формы">
        </button>
        <span className={`search-form-error ${props.type}-error ${isFormValid ? '' : 'search-form-error_active'}`}> Нужно ввести ключевое слово </span>
      </div>
      <label htmlFor={`${props.type}-checkbox`} className={`search-form__label ${props.isShortMovie ? 'search-form__label_active' : ''}`}>
        <input defaultChecked={props.isShortMovie} onChange={props.handleFilterMovies} className="search-form__checkbox" type="checkbox" name={`${props.type}-checkbox`} id={`${props.type}-checkbox`} />
        <span className="search-form__custom-checkbox"></span>
      </label>
    </form>
  )
})