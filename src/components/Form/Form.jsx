import React from "react";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { FormInput } from '../FormInput/FormInput';

export const Form = React.memo((props) => {

  const { values, handleChange, isFormValid, resetForm, errors } = useFormWithValidation();

  React.useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.name === 'register') {
      props.handleRegisterSubmit(values.name, values.email, values.password);
    } else {
      props.handleLoginSubmit(values.email, values.password);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form" name={props.name} noValidate>
      <div className="form__container">
        <h2 className="form__title">{props.title}</h2>
        {props.name === 'register' ?
          <>
            <FormInput
              value={values.name}
              error={errors.name}
              isFormValid={isFormValid}
              handleChange={handleChange}
              type='name'
              title='Имя'
              minL="2"
              maxL="30" 
              
              />
            <FormInput
              value={values.email}
              error={errors.email}
              isFormValid={isFormValid}
              handleChange={handleChange}
              type='email'
              title='E-mail' />
            <FormInput
              value={values.password}
              error={errors.password}
              isFormValid={isFormValid}
              handleChange={handleChange}
              type='password'
              title='Пароль' 
              minL="8"
              />
          </>
          :
          <>
            <FormInput
              value={values.email}
              error={errors.email}
              isFormValid={isFormValid}
              handleChange={handleChange}
              type='email'
              title='E-mail' />
            <FormInput
              value={values.password}
              error={errors.password}
              isFormValid={isFormValid}
              handleChange={handleChange}
              type='password'
              title='Пароль' 
              minL="8"
              />
          </>
        }
      </div>
      <button disabled={!isFormValid} type="submit" className={`form__button ${isFormValid ? '' : 'form__button_disabled'}`} value={props.buttonText} aria-label="Кнопка отправки формы">{props.buttonText}</button>
    </form>
  )
})