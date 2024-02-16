'use client'
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { Productdata } from "../data/data";

// interface CartItems {
//   [key: number]: number;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: {
//     raw: number;
//   };
//   image: {
//     url: string;
//   };
//   seo: {
//     description: string;
//   };
//   category: string;
//   categories: {
//     name: string;
//   };
// }

// interface ShopContextValue {
//   cartItems: CartItems;
//   addToCart: (itemId: number) => void;
//   updateCartItemCount: (newAmount: number, itemId: number) => void;
//   removeFromCart: (itemId: number) => void;
//   getTotalCartAmount: () => number;
//   checkout: () => void;
// }
// export const ShopContext = createContext<ShopContextValue | null>(null);

// export const ShopContextProvider: React.FC = (props:any) => {
//   const [product, setProduct] = useState<Product[]>([] as Product[]);
//   const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart(product));

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const products: Product[] = await Productdata.getproduct();
//         setProduct(products);
//         setCartItems(getDefaultCart(products));
//       } catch (error) {
//         console.log('context error', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const getDefaultCart = (products: Product[]): CartItems => {
//     let cart: CartItems = {};
//     products.forEach((product) => {
//       cart[product.id] = 0;
//     });
//     return cart;
//   };

//   const getTotalCartAmount = (): number => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = product.find((product) => product.id === Number(item));
//         if (itemInfo) {
//           totalAmount += cartItems[item] * itemInfo.price.raw;
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const addToCart = (itemId: number): void => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId: number): void => {
//     if (cartItems[itemId] > 0) {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     }
//   };

//   const updateCartItemCount = (newAmount: number, itemId: number): void => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   console.log(cartItems)

//   const checkout = (): void => {
//     setCartItems(getDefaultCart(product));
//   };

//   const contextValue: ShopContextValue = {
//     cartItems,
//     addToCart,
//     updateCartItemCount,
//     removeFromCart,
//     getTotalCartAmount,
//     checkout,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export const useShopContext = (): ShopContextValue => {
//   const context = useContext(ShopContext);
//   if (!context) {
//     throw new Error("useShopContext must be used within a ShopContextProvider");
//   }
//   return context;
// };
'use client'
import React, { createContext, useContext, useState, useEffect } from "react";
import { Productdata } from "../data/data";

interface CartItems {
  [key: number]: number;
}

interface Product {
  id: number;
  name: string;
  price: {
    raw: number;
  };
  image: {
    url: string;
  };
  seo: {
    description: string;
  };
  category: string;
  categories: {
    name: string;
  };
}

interface ShopContextValue {
  cartItems: CartItems;
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}
export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopContextProvider: React.FC = (props:any) => {
  const getDefaultCart = (products: Product[]): CartItems => {
    let cart: CartItems = {};
    products.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [product, setProduct] = useState<Product[]>([] as Product[]);
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart(product));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products: Product[] = await Productdata.getproduct();
        setProduct(products);
        setCartItems(getDefaultCart(products));
      } catch (error) {
        console.log('context error', error);
      }
    };
    fetchData();
  }, []);

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price.raw;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number): void => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart(product));
  };

  const contextValue: ShopContextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export const useShopContext = (): ShopContextValue => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};
