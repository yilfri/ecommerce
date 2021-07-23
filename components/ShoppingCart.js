import React, { useState, useEffec, useContext } from 'react';
import Image from 'next/image';

// Style Components & Prime React Dependencies
import { Button } from 'primereact/button';
import {
	ProductListItem,
	ProductItem,
	ProductImg,
	ProductListDetails,
	ProductPriceTotal,
	ProductAction
} from './ui/shoppingCartStyles';

const ShoppingCart = ({ product }) => {
	// Destructuración de props.
	const { name, price, img, qtyToBuy } = product;

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
							/>
							x{qtyToBuy}
						</h5>

						<p>
							Precio unitario: <span>${price}</span>
						</p>
					</ProductListDetails>
					<ProductPriceTotal className=" p-d-flex p-flex-column p-flex-md-row p-jc-between p-ai-end">
						<h6>Total: </h6>
						<h6>${qtyToBuy * price}</h6>
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
