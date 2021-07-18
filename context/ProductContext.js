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

	const addProduct = () => {
		const oneMore = {
			Name: 'Ground almonds',
			Price: 3,
			Location: 'Home baking'
		};

		setProducts([...products, oneMore]);
	};

	return (
		<ProductsContext.Provider
			value={{
				products,
				addProduct
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
