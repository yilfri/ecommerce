import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import CartContext from '../context/cart/cartContext';
import ShoppingCart from '../components/ShoppingCart';

// Style Components & Prime React Dependencies
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { UlProducts, Title, NoItems, SubTotal, TotalAmount } from '../components/ui/cartStyles';
import { ProductListItem } from '../components/ui/shoppingCartStyles';

const Cart = () => {
	// Obtener datos del Context.
	const { cart, priceTotal, payCart } = useContext(CartContext);

	const router = useRouter();

	const handleClick = () => {
		router.push('/order');
		payCart();
	};

	const totalProductQtity = cart.reduce((acc, el) => acc + el.qtyToBuy, 0);

	return (
		<Layout
			title="FunKommerce | Carrito de compras"
			description="Carrito de compras de tus Funko Pop"
		>
			<>
				<Title>Carrito de compras</Title>

				{cart.length === 0 ? (
					<NoItems>No hay productos agregados al carrito</NoItems>
				) : (
					<div className="p-grid p-ai-center p-flex-column p-m-2">
						<UlProducts className="p-col-12 p-md-8">
							{cart.map((product) => (
								<ShoppingCart key={product.id} product={product} />
							))}

							<ProductListItem>
								<SubTotal>
									<p>Subtotal ({totalProductQtity} productos):</p>

									<span>${priceTotal}</span>
								</SubTotal>
							</ProductListItem>
						</UlProducts>
						<Button
							label="Pagar"
							icon="pi pi-credit-card"
							className="p-p-right"
							onClick={() => handleClick()}
						/>
					</div>
				)}
			</>
		</Layout>
	);
};

export default Cart;
