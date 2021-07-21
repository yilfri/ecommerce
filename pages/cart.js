import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import CartContext from '../context/cart/cartContext';
import ShoppingCart from '../components/ShoppingCart';

const Cart = () => {
	// Obtener datos del Context.
	const { cart } = useContext(CartContext);

	return (
		<Layout
			title="FunKommerce | Carrito de compras"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<h1>Carrito de compras</h1>

				{cart.length === 0 ? (
					<p>No hay nada papaito</p>
				) : (
					<ul>
						{cart.map((product) => (
							<ShoppingCart key={product.id} product={product} />
						))}
					</ul>
				)}
			</>
		</Layout>
	);
};

export default Cart;
