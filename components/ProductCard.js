import React, { useState, useContext } from 'react';

const ProductCard = ({ product }) => {
	// Destructuración de props.
	const { name, price, quantity, description, id, img } = product;

	return (
		<>
			<li>
				Product: {name} - Price: {price} - Cantidad: {quantity}
			</li>

			<button onClick={() => console.log(product)}>-</button>
			<button onClick={() => console.log(product)}>+</button>
		</>
	);
};

export default ProductCard;
