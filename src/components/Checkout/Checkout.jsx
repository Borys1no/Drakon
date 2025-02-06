import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Footer from '../Footer/Footer'; // Importar el footer
import './Checkout.css';

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calcula el total solo para los ítems que tengan un precio válido
  const total = cartItems.reduce((acc, item) => {
    const price = item.price ? item.price : 0; // Verificar si el campo `price` está definido
    return acc + price * item.quantity;
  }, 0);

  // Función para manejar el clic en "Pagar"
  const handlePay = () => {
    navigate('/checkoutInfo', { state: { total } }); // Redirige a la página de PasarelaPago y pasa el total
  };

  return (
    <div className="C-checkoutPage-container">
      <div className="C-checkoutPage">
        <h1>Carrito de Compras</h1>
        {cartItems.length === 0 ? (
          <p>No tienes productos en el carrito.</p>
        ) : (
          <>
            <ul className="C-checkoutItemsList">
              {cartItems.map((item, index) => (
                <li key={index} className="C-checkoutItem">
                  <span>{item.name}</span> - <span>{item.quantity} x ${item.price ? item.price.toFixed(2) : 'N/A'}</span>
                  <button className="C-removeButton" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <h2 className="C-total">Total: ${total.toFixed(2)}</h2>
            <button className="C-payButton" onClick={handlePay}>Pagar</button>
          </>
        )}
      </div>
      <Footer /> {/* Incluye el footer */}
    </div>
  );
};

export default Checkout;