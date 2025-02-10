import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import "./CheckoutUserInfo.css"; // Asegúrate de que los estilos estén bien configurados

const CheckoutUserInfo = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    direccion: "",
  });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extraer datos del carrito desde location.state
  const { cartItems = [], subtotal = 0, total = 0 } = location.state || {};
  const shippingCost = 5.0; // Costo de envío fijo

  // Obtener datos del usuario desde Firebase
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, []);

  // Manejar cambios en los inputs del usuario
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Guardar cambios en los datos del usuario
  const saveChanges = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, {
          nombre: userData.nombre,
          cedula: userData.cedula,
          telefono: userData.telefono,
          direccion: userData.direccion,
        });
        alert("Datos actualizados correctamente");
        setEditing(false);
      } catch (error) {
        console.error("Error actualizando los datos", error);
        alert("Hubo un error al actualizar los datos");
      }
    }
  };

  // Manejar la finalización del pago
  const handleFinalizePayment = () => {
    navigate("/cn", { state: { total: subtotal + shippingCost } });

  };

  return (
    <div>
        {/* Título fuera del contenedor */}
        <h1 className="main-title">Confirmar Información de Envío</h1>

        {/* Contenedor principal */}
        <div className="checkout-container">
            {/* Sección de datos del usuario */}
            <div className="user-info-section">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleChange}
                    disabled={!editing}
                />

                <label>Cédula:</label>
                <input
                    type="text"
                    name="cedula"
                    value={userData.cedula}
                    onChange={handleChange}
                    disabled={!editing}
                />

                <label>Email:</label>
                <input type="email" name="email" value={userData.email} disabled />

                <label>Teléfono:</label>
                <input
                    type="text"
                    name="telefono"
                    value={userData.telefono}
                    onChange={handleChange}
                    disabled={!editing}
                />

                <label>Dirección de Envío:</label>
                <input
                    type="text"
                    name="direccion"
                    value={userData.direccion}
                    onChange={handleChange}
                    disabled={!editing}
                />

                <button className="btnEditar" onClick={() => setEditing(!editing)}>
                    {editing ? "Cancelar" : "Editar"}
                </button>
                {editing && <button onClick={saveChanges}>Guardar</button>}
            </div>

            {/* Sección de resumen de la compra */}
            <div className="order-summary-section">
                <h2>Resumen de Compra</h2>

                <div className="order-items">
                    <h3>Productos</h3>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="order-item">
                                <p>
                                    {item.name} - {item.quantity} x $
                                    {item.price?.toFixed(2) || "0.00"}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )}
                </div>

                <div className="order-summary">
                    <p>
                        Subtotal: <strong>${subtotal.toFixed(2)}</strong>
                    </p>
                    <p>
                        Costo de Envío: <strong>${shippingCost.toFixed(2)}</strong>
                    </p>
                    <h3>
                        Total: <strong>${(subtotal + shippingCost).toFixed(2)}</strong>
                    </h3>
                </div>

                {/* Botón para continuar al pago */}
                <button className="final-pay-btn" onClick={handleFinalizePayment}>
                    Finalizar Pago
                </button>
            </div>
        </div>
    </div>
  );
};

export default CheckoutUserInfo;