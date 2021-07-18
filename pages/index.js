import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ProductCard';

export default function Home() {
	const { products } = useContext(ProductsContext);

	return (
		<Layout title="FunKommerce" description="Tienda Online de Funko Pop">
			<>
				<h1>Lista de productos</h1>

				{products.map((product) => (
					<ProductCard key={product.Name} product={product} />
				))}
			</>
		</Layout>
	);
}
