import { useState, useCallback } from 'react';

export function useFormWithValidation() {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);


  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    if (
      input.validity.badInput === false &&
      input.validity.patternMismatch === true &&
      input.validity.rangeOverflow === false &&
      input.validity.rangeUnderflow === false &&
      input.validity.stepMismatch === false &&
      input.validity.tooLong === false &&
      input.validity.tooShort === false &&
      input.validity.typeMismatch === false
    ) {
      input.setCustomValidity('Укажите почту в формате: example@example.ru');
    } else {
      input.setCustomValidity('');
    }
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: input.validationMessage }));
    setIsFormValid(input.closest('form' || 'search-form').checkValidity());
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = (false)) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsFormValid(newIsFormValid);
  }, [setValues, setErrors, setIsFormValid]);

  return { values, handleChange, errors, isFormValid, resetForm }
}