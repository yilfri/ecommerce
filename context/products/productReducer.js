import { GET_PRODUCTS } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};
		default:
			return state;
	}
};
