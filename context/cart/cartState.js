import React, { useReducer } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';
import { GET_PRODUCTS, DECREASE_QUANTITY_PRODUCT, ADD_PRODUCT_CART } from '../../types';

const CartState = ({ children }) => {
	const initialState = {
		products: [],
		cart: []
	};

	// Reducer
	const [state, dispatch] = useReducer(CartReducer, initialState);

	// Funciones que maneja los productos.

	// Obtener datos desde la API.
	const getProducts = async () => {
		if (state.products.length <= 0) {
			try {
				const res = await fetch('/api/products');
				const data = await res.json();

				// Esablece los productos en el Context.
				dispatch({
					type: GET_PRODUCTS,
					payload: data
				});
			} catch (error) {
				console.log(error);
			}
		}
	};

	// Decrementa la cantidad de productos disponibles.
	const decreaseProductQty = (product) => {
		dispatch({
			type: DECREASE_QUANTITY_PRODUCT,
			payload: product
		});
	};

	// Decrementa la cantidad de productos disponibles.
	const addProductCart = (product) => {
		console.log(product);
		dispatch({
			type: ADD_PRODUCT_CART,
			payload: product
		});
	};

	// Provider
	return (
		<CartContext.Provider
			value={{
				products: state.products,
				cart: state.cart,
				getProducts,
				decreaseProductQty,
				addProductCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;
