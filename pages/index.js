import { useEffect, useContext, useRef } from 'react';
import CartContext from '../context/cart/cartContext';
import Layout from '../components/layout/Layout';
import Image from 'next/image';

// Prime React Dependencies
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Styled Components.
import { CardFlex, ProductPrice, ProductContainer } from '../components/styles/home';

export default function Home() {
	// Destructuración de datos del context
	const { products, getProducts, decreaseProductQty, addProductCart } = useContext(CartContext);

	// Solicita los datos a la API.
	useEffect(() => {
		getProducts();
	}, []);

	const toast = useRef(null);

	// Handle Events.
	const handleAddToCart = (product) => {
		decreaseProductQty(product);
		addProductCart(product);

		toast.current.show({
			severity: 'success',
			summary: 'Producto agregado',
			detail: `Haz agreagado un ${product.name} al carrito`,
			life: 3000
		});
	};

	const itemTemplate = (product) => {
		if (!product) return;

		return renderGridItem(product);
	};

	const renderGridItem = (data) => {
		return (
			<div className="p-col-12 p-md-4 ">
				<CardFlex className="card">
					<div>
						<Image
							src={data.img.front}
							onError={(e) =>
								(e.target.src =
									'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
							}
							alt={data.name}
							width={300}
							height={300}
							layout="responsive"
						/>
						<h3>{data.name}</h3>
						<p>{data.description}</p>
						<span>
							Pzas disponibles: <b>{data.quantity} </b>
						</span>
					</div>
					<div className="p-d-flex p-jc-between p-ai-center p-mt-4">
						<ProductPrice>${data.price}</ProductPrice>
						<Button
							icon="pi pi-shopping-cart"
							label="Add to Cart"
							disabled={data.quantity === 0}
							onClick={() => handleAddToCart(data)}
						></Button>
					</div>
				</CardFlex>
			</div>
		);
	};

	return (
		<Layout title="FunKommerce" description="Tienda Online de Funko Pop">
			<ProductContainer className="card verdecito">
				<Toast ref={toast} position="bottom-right" />

				<DataView value={products} itemTemplate={itemTemplate} paginator rows={9} />
			</ProductContainer>
		</Layout>
	);
}
