'use client'
import React, { useContext } from "react";
import { ShopContext } from "../contextcart/contextcart";
import '../style/productcard.css'
import Link from "next/link";

export const CartItem = (props: { products: any }) => {
  const product = props.products;
  const context = useContext(ShopContext);

  // Check if context is null
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;
  const cartItemCount = cartItems[product.id];
  return (
    <div>
    <div className="cardlist">
      <div className="card">
        <div className="product">
          <img src={product.image.url} width={250} height={200} alt={product.name} />
          <div className="description">
            <Link href={'/component/productlist/' + product.id} ><p>{product.name}</p></Link>
             <p> ${product.price.raw}</p>
            <button className="cartbutton btn btn-primary" onClick={() => removeFromCart(product.id)}> - </button>
            <input className="cartinput" value={cartItems[product.id]} />
            <button className="cartbutton btn btn-primary" onClick={() => addToCart(product.id)}> + </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
