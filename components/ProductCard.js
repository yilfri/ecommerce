import React, { useContext } from 'react';
import ProductsContext from '../context/products/ProductsContext';

const ProductCard = ({ product }) => {
	// Destructuración de props.
	const { name, price, quantity, description, id, img } = product;

	// Obtener datos del Context.
	const { updateQuantity } = useContext(ProductsContext);

	return (
		<>
			<li>
				Product: {name} - Price: {price} - Cantidad: {quantity}
			</li>

			{quantity !== 0 && <button onClick={() => updateQuantity(product)}>Add cart</button>}
		</>
	);
};

export default ProductCard;
