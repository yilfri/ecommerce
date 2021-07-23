import { useState, useEffect } from 'react';

const useValidation = (initialState, validate, fn) => {
	const [value, setValue] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [submitForm, setSubmitForm] = useState(false);

	useEffect(() => {
		if (submitForm) {
			const noErrors = Object.keys(errors).length === 0;

			if (noErrors) {
				fn(); // Función que se ejecuta cuando se pasa la validación.
			}
			setSubmitForm(false);
		}
	}, [errors]);

	// Handle Events - Cuando el usuario escribe en el formulario.
	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value
		});
	};

	// Handle Events - Cuando el usuario envia en el formulario.
	const handleSubmit = (e) => {
		e.preventDefault();

		const errorsValidation = validate(value);

		setErrors(errorsValidation);
		setSubmitForm(true);
	};

	// handle Events - Cuando el usuario hace focus en el input.
	const handleBlur = () => {
		const errorsValidation = validate(value);
		setErrors(errorsValidation);
	};

	return {
		value,
		errors,
		submitForm,
		handleChange,
		handleSubmit,
		handleBlur
	};
};

export default useValidation;
