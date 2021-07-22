import { GET_PRODUCTS, DECREASE_QUANTITY_PRODUCT, ADD_PRODUCT_CART, TOTAL_CART } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};
		case DECREASE_QUANTITY_PRODUCT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			};
		case ADD_PRODUCT_CART:
			let newItem = state.products.find((product) => product.id === action.payload.id);

			let itemInCart = state.cart.find((item) => item.id === newItem.id);

			return itemInCart
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem.id ? { ...item, qtyToBuy: item.qtyToBuy + 1 } : item
						)
				  }
				: {
						...state,
						cart: [...state.cart, { ...newItem, qtyToBuy: (newItem.qtyToBuy = 1) }]
				  };
		case TOTAL_CART:
			return {
				...state,
				priceTotal: state.cart.reduce((acc, el) => acc + el.price * el.qtyToBuy, 0)
			};
		default:
			return state;
	}
};
