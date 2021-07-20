import React, { useReducer } from 'react';
import ProductsContext from './ProductsContext';
import ProductReducer from './productReducer';
import { GET_PRODUCTS, UPDATE_QUANTITY_PRODUCT } from '../../types';

const ProductState = ({ children }) => {
	const initialState = {
		products: []
	};

	// Reducer
	const [state, dispatch] = useReducer(ProductReducer, initialState);

	// Funciones que maneja los productos.

	// Obtener datos desde la API.
	const getProducts = async () => {
		try {
			const res = await fetch('/api/products');
			const data = await res.json();

			localStorage.setItem('productsLocal', JSON.stringify(data));

			dispatch({
				type: GET_PRODUCTS,
				payload: JSON.parse(localStorage.getItem('productsLocal'))
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Actualizar la cantidad de productos disponibles.
	const updateQuantity = (product) => {
		dispatch({
			type: UPDATE_QUANTITY_PRODUCT,
			payload: product
		});
	};

	// Provider
	return (
		<ProductsContext.Provider
			value={{
				products: state.products,
				getProducts,
				updateQuantity
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductState;
