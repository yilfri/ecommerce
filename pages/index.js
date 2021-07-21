import { useEffect, useContext } from 'react';
import CartContext from '../context/cart/cartContext';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ProductCard';

export default function Home() {
	// Destructuración de datos del context
	const { products, getProducts } = useContext(CartContext);

	// Solicita los datos a la API.
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Layout title="FunKommerce" description="Tienda Online de Funko Pop">
			<>
				<h1>Lista de productos</h1>

				<ul>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ul>
			</>
		</Layout>
	);
}
