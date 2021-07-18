import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch('/api/products');
			const data = await res.json();

			setProducts(data);
		};

		getData();
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
