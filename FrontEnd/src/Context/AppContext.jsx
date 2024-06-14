import { createContext } from "react";
import React, { useState, useEffect } from 'react';
import { fetchCart, addItemToCart as apiAddItemToCart, removeItemFromCart as apiRemoveItemFromCart, clearCart as apiClearCart } from '../apicalls/api';

const AppContext = createContext({
  basket: {},
  addItemToBasket: () => {},
  removeItemFromBasket: () => {},
  updateItemInBasket: () => {},
  setBasket: () => {},
  clearBasket: () => {},
});

export default AppContext;

export const AppProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    
    const savedBasket = localStorage.getItem('basket');
    return savedBasket ? JSON.parse(savedBasket) : {};
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    let total = 0;
    let discount = 0;
    Object.values(basket).forEach(item => {
      discount += (item.price * (item.discountPercentage / 100) * item.quantity);
      total += (item.price * item.quantity);
    });

    let roundedTotalDiscount = discount.toFixed(2);
    let roundedTotalAmount = (total - discount).toFixed(2);

    setTotalDiscount(parseFloat(roundedTotalDiscount));
    setTotalAmount(parseFloat(roundedTotalAmount));
  }, [basket]);

  useEffect(() => {
    
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addItemToBasket = async (product) => {
    const newBasket = { ...basket };

    if (newBasket[product.productId]) {
      newBasket[product.productId].quantity += 1;
    } else {
      newBasket[product.productId] = { ...product, quantity: 1 };
    }

    setBasket(newBasket);
    await apiAddItemToCart(product);  
  };

  const removeItemFromBasket = async (productId) => {
    const newBasket = { ...basket };
    delete newBasket[productId];
    setBasket(newBasket);
    await apiRemoveItemFromCart(productId);  
  };

  const clearBasket = async () => {
    setBasket({});
    await apiClearCart();  
  };

  const increaseQuantity = async (productId) => {
    const newBasket = { ...basket };
    if (newBasket[productId]) {
      newBasket[productId].quantity += 1;
      setBasket(newBasket);
      
    }
  };

  return (
    <AppContext.Provider
      value={{
        basket,
        addItemToBasket,
        removeItemFromBasket,
        setBasket,
        clearBasket,
        totalDiscount,
        totalAmount,
        increaseQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
