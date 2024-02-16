'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { ShopContext } from '../contextcart/contextcart';
import '../style/Productcard.css'

interface Product {
  id: number;
  name: string;
  image: { url: string };
  price: { raw: number };
  seo: { description: string };
  category: string;
  categories: {
    name: string;
  };
}

interface Props {
  product: Product;
}

export default function Productcard(props: Props) {
  const { product } = props;
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return null; // or handle the loading state
  }

  const { addToCart, cartItems } = shopContext;

  if (!addToCart || !cartItems) {
    return null; // or handle the context being incomplete
  }

  const cartItemCount = cartItems[product.id] || 0;

  return (
    <div className="cardlist">
      <div className="card">
        <div><img src={product.image.url} width={250} height={250} /></div>
        <div><Link href={'/component/productlist/' + product.id}> {product.name} </Link></div>
        <div>{product.price.raw}</div>
        <div>{product.seo.description}</div>
        <div>
          <button className="addToCartBttn cardbutton btn btn-primary" onClick={() => addToCart(product.id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
}
