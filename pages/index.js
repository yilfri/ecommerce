import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ProductCard';

export default function Home() {
	const { products } = useContext(ProductsContext);
	console.log(products);

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
