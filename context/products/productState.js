import React, { useReducer } from 'react';
import ProductsContext from './ProductsContext';
import ProductReducer from './productReducer';
import { GET_PRODUCTS } from '../../types';

const ProductState = ({ children }) => {
	const initialState = {
		products: []
	};

	// Reducer
	const [state, dispatch] = useReducer(ProductReducer, initialState);

	// Funciones que maneja los productos.
	const getProducts = async () => {
		try {
			const res = await fetch('/api/products');
			const data = await res.json();

			console.log(res);

			dispatch({
				type: GET_PRODUCTS,
				payload: data
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Provider
	return (
		<ProductsContext.Provider
			value={{
				products: state.products,
				getProducts
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductState;
