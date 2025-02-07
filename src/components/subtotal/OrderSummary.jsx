import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extraer datos de la compra desde location.state o asignar valores predeterminados
  const { cartItems = [], subtotal = 0, total = 0 } = location.state || {};
  const shippingCost = 5.00; // Valor fijo del costo de envío

  // Manejar la redirección al hacer clic en "Finalizar Pago"
  const handleFinalizePayment = () => {
    navigate("/cn");
  };

  return (
    <div className="order-details-container">
      <br /><br /><br /><br /><br /><br />
      <h2>Resumen de Compra</h2>

      <div className="order-items">
        <h3>Productos</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <p>{item.name} - {item.quantity} x ${item.price?.toFixed(2) || "0.00"}</p>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>

      <div className="order-summary">
        <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
        <p>Costo de Envío: <strong>${shippingCost.toFixed(2)}</strong></p>
        <h3>Total: <strong>${(subtotal + shippingCost).toFixed(2)}</strong></h3>
      </div>

      <button className="final-pay-btn" onClick={handleFinalizePayment}>Finalizar Pago</button>
    </div>
  );
};

export default OrderDetails;
