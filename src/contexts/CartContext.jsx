import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Efecto para cargar los elementos del carrito desde localStorage al iniciar la app
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Función para agregar productos al carrito
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems];
      const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        updatedCart[existingItemIndex].quantity += quantity;
      } else {
        updatedCart.push({ ...product, quantity });
      }

      // Guardar el carrito en localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== productId);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Obtener el número total de productos en el carrito
  const getCartCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
