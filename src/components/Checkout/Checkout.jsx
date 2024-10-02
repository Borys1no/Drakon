import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calcula el total solo para los ítems que tengan un precio válido
  const total = cartItems.reduce((acc, item) => {
    const price = item.price ? item.price : 0; // Verificar si el campo `price` está definido
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="checkout-page">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="checkout-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="checkout-item">
                <span>{item.name}</span> - <span>{item.quantity} x ${item.price ? item.price.toFixed(2) : 'N/A'}</span>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button className="pay-button">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
