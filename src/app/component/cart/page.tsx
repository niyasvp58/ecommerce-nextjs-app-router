'use client'
import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "./cartitem";
import { ShopContext } from "../contextcart/contextcart";
import { Productdata } from "../data/data";
import Checkout from "../checkout/checkout";

function Cart() {
  const shopContext = useContext(ShopContext);
  const [product, setProduct] = useState([]);
  const [loading,setloading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await Productdata.getproduct();
        setProduct(products);
        setloading(false)
      } catch (error) {
        console.log('context error', error);
      }
    };
    fetchData();
  }, []);

  
  // Check if shopContext is null
  if (!shopContext) {
    return <div>Loading...</div>; // Or handle the loading state appropriately
  }

  const { cartItems, checkout } = shopContext;
  console.log(cartItems)
  const cartHasItems = Object.values(cartItems).some(quantity => quantity > 0);
  return (
    <>
    { !loading ? (
    <div className="cart">
      <div>
        <h2>Your Cart Items</h2>
      </div>
      <div className="cart">
        {product.map((product) => {
          if (cartItems && cartItems[product.id] !== 0) {
            return(
              <>
              <CartItem products={product} />;
              </>
            ) 
          }
          return null;
        })}
      </div>
      {cartHasItems && <Checkout />}
    </div>
                ) : <div>
                <div className="spinner-border" style={{ width: "70px", height: "70px",marginLeft:"750px",marginTop:"300px" }} role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
        </div> }

</>
  );
}

export default Cart;
