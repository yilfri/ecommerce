import React, { useState, useEffec, useContext } from 'react';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import CartContext from '../context/cart/cartContext';
import ShoppingCart from '../components/ShoppingCart';

import { OrderList } from 'primereact/orderlist';

import styled from 'styled-components';

const UlProducts = styled.ul`
	margin: 0 1rem;
	padding: 0;
	border: 1px solid #dee2e6;
`;

const Title = styled.h1`
	text-align: center;
`;

const Cart = () => {
	// Obtener datos del Context.
	const { cart } = useContext(CartContext);

	const { name, quantity, price, description, img } = cart;

	const itemTemplate = (product) => {
		return <ShoppingCart product={product} />;
	};

	return (
		<Layout
			title="FunKommerce | Carrito de compras"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<Title>Carrito de compras</Title>

				{cart.length === 0 ? (
					<p>No hay nada papaito</p>
				) : (
					<UlProducts>
						{cart.map((product) => (
							<ShoppingCart key={product.id} product={product} />
						))}
					</UlProducts>
				)}
			</>
		</Layout>
	);
};

export default Cart;
