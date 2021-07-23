export default function validateCreateAccount(values) {
	let errors = {};

	// Validar sí no hay errores.
	if (!values.name) {
		errors.name = 'Por favor ingresa tu nombre';
	}

	if (!values.lastname) {
		errors.lastname = 'Por favor ingresa tu apellido';
	}

	if (!values.address) {
		errors.address = 'Por favor ingresa tu dirección';
	}

	if (!values.city) {
		errors.city = 'Por favor ingresa tu ciudad';
	}

	if (!values.state) {
		errors.state = 'Por favor ingresa tu Estado o Provincia';
	}

	return errors;
}
