import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);


export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    setCart((prev) => {

      const existingItem = prev.find(
        (cartItem) => cartItem.id === item.id
      );


      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + item.quantity,
              }
            : cartItem
        );
      }


      return [
        ...prev,
        item
      ];
    });
  };



  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };



  const updateQuantity = (id, quantity) => {

    if (quantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity
            }
          : item
      )
    );
  };



  const clearCart = () => {
    setCart([]);
  };



  // Cart Calculations

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total +
          Number(item.price) *
          item.quantity,
        0
      ),
    [cart]
  );



  const shipping = useMemo(
    () =>
      cart.length > 0
        ? 100
        : 0,
    [cart]
  );



  const tax = useMemo(
    () =>
      subtotal * 0.14,
    [subtotal]
  );



  const discount = useMemo(
    () => 0,
    []
  );



  const total = useMemo(
    () =>
      subtotal +
      shipping +
      tax -
      discount,
    [
      subtotal,
      shipping,
      tax,
      discount
    ]
  );



  const totalItems = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total + item.quantity,
        0
      ),
    [cart]
  );



  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,


        subtotal,
        shipping,
        tax,
        discount,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}



export function useCart(){

  return useContext(CartContext);

}