import '../styles/globals.css';
import CartState from '../context/cart/cartState';

function MyApp({ Component, pageProps }) {
	return (
		<CartState>
			<Component {...pageProps} />
		</CartState>
	);
}

export default MyApp;
