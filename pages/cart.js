import React, { useState, useEffec, useContext } from 'react';
import Layout from '../components/layout/Layout';
import CartContext from '../context/cart/cartContext';
import ShoppingCart from '../components/ShoppingCart';

// Style Components & Prime React Dependencies
import { Button } from 'primereact/button';
import { UlProducts, Title, NoItems, TotalAmount } from '../components/styles/cartStyles';

const Cart = () => {
	// Obtener datos del Context.
	const { cart, priceTotal } = useContext(CartContext);

	return (
		<Layout
			title="FunKommerce | Carrito de compras"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<Title>Carrito de compras</Title>

				{cart.length === 0 ? (
					<NoItems>No hay productos agregados al carrito</NoItems>
				) : (
					<>
						<UlProducts>
							{cart.map((product) => (
								<ShoppingCart key={product.id} product={product} />
							))}
						</UlProducts>

						<TotalAmount>
							<h4>TOTAL</h4>
							<p>
								Subtotal: <span>${priceTotal}</span>{' '}
							</p>
							<p>
								Envio: <span>${9}</span>
							</p>
							<Button label={`Total a pagar: $${priceTotal + 9}`} />
						</TotalAmount>
					</>
				)}
			</>
		</Layout>
	);
};

export default Cart;
