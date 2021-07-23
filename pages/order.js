import React, { useState, useRef } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

// Style Components & Prime React Dependencies
import { PaymentForm, Error } from '../components/ui/orderStyles';
import { Title } from '../components/ui/cartStyles';
import { Toast } from 'primereact/toast';

// Validaciones.
import useValidation from '../hooks/useValidation';
import validateOrder from '../validation/validateOrder';

// State inicial de los inputs.
const INITIAL_STATE = {
	name: '',
	lastname: '',
	address: '',
	city: '',
	state: ''
};

const Order = () => {
	// Revisa sí hay campos vación al enviar el formulario.
	const [error, setError] = useState(true);

	// Toast - Prime React.
	const toast = useRef(null);
	const showSuccess = () => {
		toast.current.show({
			severity: 'success',
			summary: 'Gracias por su compra',
			detail: 'Recibirá un correo electrónico con toda la información de su pedido.',
			life: 5000
		});
	};

	// Destructuración de valores desde el hook.
	const { value, errors, handleChange, handleSubmit, handleBlur } = useValidation(
		INITIAL_STATE,
		validateOrder,
		completado
	);

	const { name, lastname, address, city, state, zip } = value;

	// Función que se ejecuta al pasar la validación del formulario.
	function completado(e) {
		setError(false);

		showSuccess();

		setTimeout(() => {
			Router.push('/');
		}, 5500);
	}

	return (
		<Layout
			title="FunKommerce | Completa tu pago"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<Title>Formulario de compra</Title>
				<div className="card p-d-flex  p-jc-center">
					<PaymentForm className="p-col-12 p-md-8 " onSubmit={handleSubmit}>
						<h2>Datos Personales</h2>
						<div className="p-fluid p-formgrid p-grid">
							<div className="p-field p-col-12 p-md-6">
								<label htmlFor="name">Nombre</label>
								<InputText
									id="name"
									type="text"
									name="name"
									value={name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								{errors.name && <Error>{errors.name}</Error>}
							</div>
							<div className="p-field p-col-12 p-md-6">
								<label htmlFor="lastname">Apellido</label>
								<InputText
									id="lastname"
									type="text"
									name="lastname"
									value={lastname}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								{errors.lastname && <Error>{errors.lastname}</Error>}
							</div>
							<div className="p-field p-col-12">
								<label htmlFor="address">Dirección</label>
								<InputText
									id="address"
									type="text"
									name="address"
									rows="4"
									value={address}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								{errors.address && <Error>{errors.address}</Error>}
							</div>
							<div className="p-field p-col-12 p-md-6">
								<label htmlFor="city">Ciudad</label>
								<InputText
									id="city"
									type="text"
									name="city"
									value={city}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								{errors.city && <Error>{errors.city}</Error>}
							</div>
							<div className="p-field p-col-12 p-md-3">
								<label htmlFor="state">Estado</label>
								<InputText
									id="state"
									type="text"
									name="state"
									value={state}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								{errors.state && <Error>{errors.state}</Error>}
							</div>
							<div className="p-field p-col-12 p-md-3">
								<label htmlFor="zip">Código Zip</label>
								<InputNumber id="zip" type="text" name="zip" value={zip} />
							</div>
						</div>
						<Button
							type="submit"
							className="p-flex-column-reverse"
							label="Pagar"
							icon="pi pi-credit-card"
						/>
						{error ? <Error>Debes llenar todos los campos</Error> : null}
					</PaymentForm>
					<Toast ref={toast} />
				</div>
			</>
		</Layout>
	);
};

export default Order;
