import { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cart/cartContext';
import Layout from '../components/layout/Layout';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import PrimeReact from 'primereact/api';

import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';

import 'primereact/resources/themes/saga-blue/theme.css';
/* import 'primereact/resources/themes/vela-green/theme.css'; */
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { CardFlex, ProductPrice, ProductContainer } from '../components/styles/home';

import styles from '../styles/DataViewDemo.module.css';

import styled from 'styled-components';

export default function Home() {
	// Destructuración de datos del context
	const { products, getProducts, decreaseProductQty, addProductCart } = useContext(CartContext);

	// Solicita los datos a la API.
	useEffect(() => {
		getProducts();
	}, []);

	// Handle Events.
	const handleAddToCart = (product) => {
		decreaseProductQty(product);
		addProductCart(product);
	};

	const itemTemplate = (product) => {
		if (!product) return;

		return renderGridItem(product);
	};

	const renderGridItem = (data) => {
		return (
			<div className="p-col-12 p-md-4 ">
				<CardFlex className="card">
					<div className="product-grid-item-content">
						<Image
							src={data.img.front}
							onError={(e) =>
								(e.target.src =
									'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
							}
							alt={data.name}
							width={350}
							height={350}
							layout="responsive"
						/>
						<h3>{data.name}</h3>
						<p>{data.description}</p>
					</div>
					<div className="p-d-flex p-jc-between p-ai-center">
						<ProductPrice>${data.price}</ProductPrice>
						<Button
							icon="pi pi-shopping-cart"
							label="Add to Cart"
							/* disabled={data.inventoryStatus === 'OUTOFSTOCK'} */
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
				<DataView value={products} itemTemplate={itemTemplate} paginator rows={9} />
			</ProductContainer>
		</Layout>
	);
}
