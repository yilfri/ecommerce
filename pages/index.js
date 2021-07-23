import { useEffect, useContext } from 'react';
import CartContext from '../context/cart/cartContext';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ProductCard';

// Prime React Dependencies
import { DataView } from 'primereact/dataview';

// Styled Components.
import { ProductContainer } from '../components/ui/home';

export default function Home() {
	// Destructuración de datos del context
	const { products, getProducts } = useContext(CartContext);

	// Solicita los datos a la API.
	useEffect(() => {
		getProducts();
	}, []);

	const itemTemplate = (product) => {
		if (!product) return;

		return <ProductCard product={product} />;
	};

	return (
		<Layout title="FunKommerce" description="Tienda Online de Funko Pop">
			<ProductContainer>
				<DataView
					value={products}
					itemTemplate={itemTemplate}
					emptyMessage={'No hay productos disponibles'}
					paginator
					rows={9}
				/>
			</ProductContainer>
		</Layout>
	);
}
