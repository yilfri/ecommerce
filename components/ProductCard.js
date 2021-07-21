import React, { useContext } from 'react';
import CartContext from '../context/cart/cartContext';

const ProductCard = ({ product }) => {
	// Destructuración de props.
	const { name, price, quantity, description, id, img } = product;

	// Obtener datos del Context.
	const { decreaseProductQty, addProductCart } = useContext(CartContext);

	const handleAddToCart = (product) => {
		decreaseProductQty(product);
		addProductCart(product);
	};
	return (
		<>
			<li>
				Product: {name} - Price: {price} - Cantidad: {quantity}
			</li>

			{quantity !== 0 && <button onClick={() => handleAddToCart(product)}>Add cart</button>}
		</>
	);
};

export default ProductCard;
