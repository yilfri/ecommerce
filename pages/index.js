import { useEffect, useContext } from 'react';
import CartContext from '../context/cart/cartContext';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ProductCard';
import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
/* import 'primereact/resources/themes/vela-green/theme.css'; */
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.css';

export default function Home() {
	// Destructuración de datos del context
	const { products, getProducts } = useContext(CartContext);

	// Solicita los datos a la API.
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Layout title="FunKommerce" description="Tienda Online de Funko Pop">
			<div className="p-flex-sm-column p-flex-md-column">
				<h1>Lista de productos</h1>

				<ul>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ul>
			</div>
		</Layout>
	);
}
