import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import CartContext from '../context/cart/cartContext';
import ShoppingCart from '../components/ShoppingCart';

// Style Components & Prime React Dependencies
import styled from 'styled-components';

import { Title } from '../components/styles/cartStyles';

const PaymentForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	gap: 0.5rem;

	@media (max-width: 800px) {
		.flex-container {
			flex-direction: row;
		}
	}
`;

const Order = () => {
	// Obtener datos del Context.
	const { cart, priceTotal } = useContext(CartContext);

	return (
		<Layout
			title="FunKommerce | Completa tu pago"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<Title>Formulario de pago</Title>
				<PaymentForm>
					<input type="text" label="name" placeholder="Nombre" name="name" />
					<input type="text" label="lastname" placeholder="Apellido" name="lastname" />
					<input type="email" label="email" placeholder="Correo" name="email" />
					<input type="address" label="adress" placeholder="Dirección" name="address" />
				</PaymentForm>
			</>
		</Layout>
	);
};

export default Order;
