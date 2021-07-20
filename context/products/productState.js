import React, { useReducer } from 'react';
import ProductsContext from './ProductsContext';
import ProductReducer from './productReducer';
import { GET_PRODUCTS, UPDATE_QUANTITY_PRODUCT } from '../../types';

const ProductState = ({ children }) => {
	const initialState = {
		products: [],
		cart: []
	};

	// Reducer
	const [state, dispatch] = useReducer(ProductReducer, initialState);

	// Funciones que maneja los productos.

	// Obtener datos desde la API.
	const getProducts = async () => {
		// Sí no están almacenados los archivos en el localStorage, solicitamos los datos a la API.
		if (!localStorage.getItem('productsLocal')) {
			try {
				const res = await fetch('/api/products');
				const data = await res.json();

				// Enviar respuesta de la API al localStorage.
				localStorage.setItem('productsLocal', JSON.stringify(data));

				// Esablece los productos del localStorage en el Context.
				dispatch({
					type: GET_PRODUCTS,
					payload: JSON.parse(localStorage.getItem('productsLocal'))
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			dispatch({
				type: GET_PRODUCTS,
				payload: JSON.parse(localStorage.getItem('productsLocal'))
			});
		}
	};

	// Actualizar la cantidad de productos disponibles.
	const updateQuantity = (product) => {
		// Guarda el localStorage en una variable.
		let dataStorage = JSON.parse(localStorage.getItem('productsLocal'));

		// Modificar sólo el producto que ejecuta la función.
		let productData = dataStorage.map((data) =>
			data.id === product.id ? { ...data, quantity: data.quantity - 1 } : data
		);

		// Sobreescribir los datos del localStorage.
		localStorage.setItem('productsLocal', JSON.stringify(productData));

		// Actualización del context
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
				cart: state.cart,
				getProducts,
				updateQuantity
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductState;
