import { useContext, useRef } from 'react';
import CartContext from '../context/cart/cartContext';
import Image from 'next/image';

// Prime React Dependencies
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Styled Components.
import { CardFlex, ProductPrice } from '../components/ui/home';

const ProductCard = ({ product }) => {
	// Destructuración de props.
	const { name, quantity, price, description, img } = product;

	// Obtener datos del Context.
	const { decreaseProductQty, addProductCart, totalCart } = useContext(CartContext);

	// Creación de Ref.
	const toast = useRef(null);

	// Handle event - OnClick.
	const handleAddToCart = (product) => {
		decreaseProductQty(product);
		addProductCart(product);
		totalCart(product);

		toast.current.show({
			severity: 'success',
			summary: 'Producto agregado',
			detail: `Has agregado un ${product.name} al carrito`,
			life: 3000
		});
	};

	return (
		<div className="p-col-12 p-md-4 ">
			<CardFlex className="card">
				<div>
					<Image
						src={img.front}
						onError={(e) =>
							(e.target.src =
								'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
						}
						alt={name}
						width={300}
						height={300}
						layout="responsive"
					/>
					<h3>{name}</h3>
					<p>{description}</p>
					<span>
						Pzas disponibles: <b>{quantity} </b>
					</span>
				</div>
				<div className="p-d-flex p-jc-between p-ai-center p-mt-4">
					<ProductPrice>${price}</ProductPrice>
					<Button
						icon="pi pi-shopping-cart"
						label="Agregar"
						disabled={quantity === 0}
						onClick={() => handleAddToCart(product)}
					></Button>
				</div>
			</CardFlex>

			<Toast ref={toast} position="bottom-right" />
		</div>
	);
};

export default ProductCard;
