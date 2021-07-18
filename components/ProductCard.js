import React from 'react';

const ProductCard = ({ product }) => {
	const { name, price, quantity, description, id, img } = product;

	return (
		<li>
			Product: {name} - Price: {price} - Cantidad: {quantity}
		</li>
	);
};

export default ProductCard;
