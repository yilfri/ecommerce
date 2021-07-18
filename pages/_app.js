import '../styles/globals.css';
import ProductState from '../context/products/productState';

function MyApp({ Component, pageProps }) {
	return (
		<ProductState>
			<Component {...pageProps} />
		</ProductState>
	);
}

export default MyApp;
