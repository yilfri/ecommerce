import React, { useState, useEffec, useContext } from 'react';
import Image from 'next/image';
import CartContext from '../context/cart/cartContext';

// Prime React Dependencies
import { Button } from 'primereact/button';

import styled from 'styled-components';

const ProductListItem = styled.li`
	display: flex;
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	margin: 0;
	border: 0 none;
	color: #495057;
	background: transparent;
	transition: transform 0.2s, box-shadow 0.2s;
	box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);

	::last-child {
		box-shadow: none;
	}
`;
const ProductItem = styled.section`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	width: 100%;
`;

const ProductImg = styled.div`
	display: block;
	overflow: hidden;
	position: relative;
	box-sizing: border-box;
	margin: 0px;
	width: 75px;
	margin-right: 1rem;
`;

const ProductListDetails = styled.div`
	flex: 1 1 0;

	h4 {
		font-size: 1.5rem;
		margin: 1.5rem 0 1rem 0;
		font-weight: 600;
		line-height: 0;
	}

	h5,
	i {
		font-size: 1rem;
		font-weight: normal;
		line-height: 0;
	}

	span {
		font-weight: normal;
		font-size: 1rem;
	}
`;

const ProductPriceTotal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	line-height: 0;
	margin-left: 1rem;

	h6 {
		font-size: 1.2rem;
		margin: 1rem 0;
		padding: 0;
	}
`;

const ProductAction = styled.div`
	margin: 0;
`;

const ShoppingCart = ({ product }) => {
	// Destructuración de props.
	const { name, price, quantity, description, id, img, qtyToBuy } = product;

	// Obtener datos del Context.
	const { cart } = useContext(CartContext);

	return (
		<>
			<ProductListItem>
				<ProductItem>
					<ProductImg>
						<Image
							src={img.front}
							onError={(e) =>
								(e.target.src =
									'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
							}
							alt={name}
							width={500}
							height={500}
							layout="responsive"
						/>
					</ProductImg>
					<ProductListDetails>
						<h4>{name}</h4>

						<h5>
							<i
								className="pi pi-shopping-cart
"
							/>{' '}
							x{qtyToBuy}
						</h5>

						<p>
							Precio unitario: <span>${price}</span>
						</p>
					</ProductListDetails>
					<ProductPriceTotal>
						<h6>
							Total: <b>${qtyToBuy * price}</b>
						</h6>
					</ProductPriceTotal>
					<ProductAction>
						<Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
					</ProductAction>
				</ProductItem>
			</ProductListItem>
		</>
	);
};

export default ShoppingCart;
