import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';


export const ProfileForm = React.memo((props) => {

  const { values, handleChange, isFormValid, resetForm, errors } = useFormWithValidation();

  const userInfo = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    resetForm({
      profileName: userInfo.name,
      profileEmail: userInfo.email
    }, {}, false)
  }, [userInfo, resetForm]);

  

  function handleSubmit(e) {
    e.preventDefault();

    props.handleUpdateUser({
      name: values.profileName,
      email: values.profileEmail,
    });
  }

  const buttonStatus = (isFormValid && ((values.profileName !== userInfo.name) && (values.profileEmail !== userInfo.email)));

  return (
    <form onSubmit={handleSubmit} className="profile__form" name="profile-form" noValidate>
      <h2 className="profile__form-title">
        {`Привет, ${userInfo.name}!`}
      </h2>
      <div className="profile__form-body">
        <div className="profile__labels">
          <label htmlFor="" className="profile__label">
            Имя
            <input onChange={handleChange} value={values.profileName || ''} type="text" className="profile__input" name="profileName" minLength="2" maxLength="30" required/>
            <span className={`profile__input-error ${isFormValid ? '' : 'profile__input-error_active'}`}>{errors.profileName}</span>
          </label>
          <label htmlFor="" className="profile__label">
            E-mail
            <input onChange={handleChange} value={values.profileEmail || ''} type="email" className="profile__input" name="profileEmail" required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'/>
            <span className={`profile__input-error ${isFormValid ? '' : 'profile__input-error_active'}`}>{errors.profileEmail}</span>
          </label>
        <p className={`profile__info-text ${props.isPatchUserInfoSucesfull ? 'profile__info-text_visible' : ''}`}>Успешно!</p>
        </div>
        <button disabled={!buttonStatus} type="submit" className="profile__form-button">
          Редактировать
        </button>
      </div>
    </form>
  )
})