import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Footer from "../Footer/Footer";
import "./Checkout.css";
import Swal from 'sweetalert2';
import {auth} from "../../firebase/firebase";



const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isUserLoggedIn = () =>{
    const user = auth.currentUser;
    return user !== null;

  }

  const handlePay = () => {
    if (!isUserLoggedIn()) {
      Swal.fire({
        title: 'Debes iniciar sesión',
        text: 'Para continuar con el pago, por favor inicia sesión.',
        icon: 'warning',
        confirmButtonText: 'Iniciar sesión',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Redirige a la página de inicio de sesión
        }
      });
    } else {
      navigate("/checkoutInfo", { state: { cartItems, subtotal } });
    }
  };

  // Calcular el subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  // Función para manejar el clic en "Pagar"


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
                  <span>{item.name}</span> - <span>{item.quantity} x ${item.price?.toFixed(2) || "N/A"}</span>
                  <button className="C-removeButton" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <h2 className="C-total">Subtotal: ${subtotal.toFixed(2)}</h2>
            <button className="C-payButton" onClick={handlePay}>Pagar</button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;