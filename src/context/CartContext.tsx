import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CartContextType, CartItem } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex(
      cartItem => cartItem.perfume.id === item.perfume.id && cartItem.size === item.size
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id: string, size: string) => {
    setCart(cart.filter(item => !(item.perfume.id === id && item.size === size)));
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    const updatedCart = cart.map(item => {
      if (item.perfume.id === id && item.size === size) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};