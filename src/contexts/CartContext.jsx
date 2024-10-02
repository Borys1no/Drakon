import React, { createContext, useState, useEffect, useContext } from 'react';
import { doc, setDoc, getDoc } from "firebase/firestore"; // Importar las funciones de Firestore
import { db } from '../firebase/firebase'; // Firestore
import { useAuth } from './authContext'; // Importar contexto de autenticación

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth(); // Acceder al usuario actual
  const [cartItems, setCartItems] = useState([]);

  // Efecto para cargar los elementos del carrito desde localStorage o Firestore al iniciar la app
  useEffect(() => {
    const loadCart = async () => {
      if (currentUser) {
        // Si el usuario está logueado, cargar carrito desde Firestore
        const docRef = doc(db, "carts", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCartItems(docSnap.data().items || []);
        }
      } else {
        // Si no está logueado, cargar desde localStorage
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
          setCartItems(JSON.parse(savedCartItems));
        }
      }
    };

    loadCart();
  }, [currentUser]);

  // Guardar carrito en Firestore cuando cambia el carrito y el usuario está logueado
  useEffect(() => {
    const saveCartToFirestore = async () => {
      if (currentUser && cartItems.length > 0) {
        const docRef = doc(db, "carts", currentUser.uid);
        await setDoc(docRef, { items: cartItems });
      }
    };

    saveCartToFirestore();
  }, [cartItems, currentUser]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems];
      const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        updatedCart[existingItemIndex].quantity += quantity;
      } else {
        updatedCart.push({ ...product, quantity });
      }

      // Guardar en localStorage también
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== productId);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const getCartCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
