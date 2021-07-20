import { GET_PRODUCTS, UPDATE_QUANTITY_PRODUCT } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};
		case UPDATE_QUANTITY_PRODUCT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			};
		default:
			return state;
	}
};
