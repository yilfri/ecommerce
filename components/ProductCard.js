import React from 'react';

const ProductCard = ({ product }) => {
	const { Name, Price, Location } = product;

	return (
		<div>
			<p>
				Product: {Name} - Price: {Price} - Location: {Location}
			</p>
		</div>
	);
};

export default ProductCard;
