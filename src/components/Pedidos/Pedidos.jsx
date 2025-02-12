import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Pedidos.css"; // Importar el CSS personalizado

const Pedidos = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const q = query(collection(db, "orders"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const ordersData = [];
        querySnapshot.forEach((doc) => {
          ordersData.push({ id: doc.id, ...doc.data() });
        });
        setOrders(ordersData);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading) {
    return <div>Cargando pedidos...</div>;
  }

  return (
    <div className="pedidos-container">
      <h1>Mis Pedidos</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h2>Pedido #{order.id}</h2>
            <p>Fecha: {new Date(order.timestamp?.toDate()).toLocaleString()}</p>
            <p>Total: ${order.totalAmount.toFixed(2)}</p>
            <h3>Productos:</h3>
            <ul>
              {order.products.map((product, index) => (
                <li key={index}>
                  {product.name} - {product.quantity} x ${product.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No tienes pedidos realizados.</p>
      )}
    </div>
  );
};

export default Pedidos;