import React, { createContext, useState, useEffect } from 'react';
import { doc, setDoc, getDoc, updateDoc, arrayRemove } from "firebase/firestore"; // Importar las funciones de Firestore
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
    console.log("Guardando en Firestore:", cartItems);
    const saveCartToFirestore = async () => {
      if (currentUser && cartItems.length > 0) {
        const docRef = doc(db, "carts", currentUser.uid);
        const validCartItems = cartItems.filter(item => item && item.id); // Filtra elementos inválidos
        await setDoc(docRef, { items: validCartItems });
      }
    };
  
    saveCartToFirestore();
  }, [cartItems, currentUser]);

  const addToCart = (product, quantity) => {
    if (!product || !product.id) {
      console.error("Producto inválido");
      return;
    }

     // Limpia el objeto `product` antes de agregarlo al carrito
  const cleanedProduct = {
    id: product.id,
    name: product.name || "Nombre no disponible",
    price: product.price || 0,
    image: product.image || null, // Reemplaza `undefined` con `null`
    quantity: quantity,
  };
  
  setCartItems((prevItems) => {
    const updatedCart = [...prevItems];
    const existingItemIndex = updatedCart.findIndex(item => item.id === cleanedProduct.id);

    if (existingItemIndex > -1) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart.push(cleanedProduct);
    }

    // Guardar en localStorage también
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    return updatedCart;
  });
  };

  // Modificación para eliminar también de Firestore
  const removeFromCart = async (productId) => {
    if (!productId) {
      console.error("ID de producto inválido");
      return;
    }
  
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== productId);
  
      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  
      return updatedCart;
    });
  
    // Si el usuario está logueado, elimina el producto de Firestore
    if (currentUser) {
      try {
        const cartRef = doc(db, "carts", currentUser.uid);
        const docSnap = await getDoc(cartRef);
        if (docSnap.exists()) {
          const existingItems = docSnap.data().items || [];
          const updatedItems = existingItems.filter(item => item.id !== productId);
  
          // Actualiza los elementos en Firestore
          await updateDoc(cartRef, { items: updatedItems });
        }
      } catch (error) {
        console.error('Error al eliminar el producto de Firebase:', error);
      }
    }
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
