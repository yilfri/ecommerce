import React, { useContext } from 'react';
import CartContext from '../context/cart/cartContext';

const ShoppingCart = ({ product }) => {
	// Destructuración de props.
	const { name, price, quantity, description, id, img, qtyToBuy } = product;

	// Obtener datos del Context.
	const { cart, addProductCart } = useContext(CartContext);

	return (
		<>
			<li>
				Product: {name} - Price: {price} - Cantidad: {qtyToBuy}
			</li>
		</>
	);
};

export default ShoppingCart;
