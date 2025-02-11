import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import "./CheckoutUserInfo.css";

const CheckoutUserInfo = () => {
  const { t } = useTranslation();
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
        alert(t("checkoutUpdateSuccess"));
        setEditing(false);
      } catch (error) {
        console.error("Error actualizando los datos", error);
        alert(t("checkoutUpdateError"));
      }
    }
  };

  // Manejar la finalización del pago
  const handleFinalizePayment = () => {
    const { nombre, cedula, telefono, direccion } = userData;
    if (!nombre || !cedula || !telefono || !direccion) {
      alert(t("checkoutIncompleteInfo"));
      return;
    }

    navigate("/cn", { state: { total: subtotal + shippingCost, cartItems } });
  };

  return (
    <div>
      <h1 className="main-title">{t("checkoutTitle")}</h1>

      <div className="checkout-container">
        <div className="user-info-section">
          <label>{t("checkoutName")}</label>
          <input
            type="text"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>{t("checkoutCedula")}</label>
          <input
            type="text"
            name="cedula"
            value={userData.cedula}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>{t("checkoutEmail")}</label>
          <input type="email" name="email" value={userData.email} disabled />

          <label>{t("checkoutPhone")}</label>
          <input
            type="text"
            name="telefono"
            value={userData.telefono}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>{t("checkoutAddress")}</label>
          <input
            type="text"
            name="direccion"
            value={userData.direccion}
            onChange={handleChange}
            disabled={!editing}
          />

          <button className="btnEditar" onClick={() => setEditing(!editing)}>
            {editing ? t("checkoutCancel") : t("checkoutEdit")}
          </button>
          {editing && <button onClick={saveChanges}>{t("checkoutSave")}</button>}
        </div>

        <div className="order-summary-section">
          <h2>{t("checkoutSummary")}</h2>

          <div className="order-items">
            <h3>{t("checkoutProducts")}</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  <p>
                    {item.name} - {item.quantity} x ${item.price?.toFixed(2) || "0.00"}
                  </p>
                </div>
              ))
            ) : (
              <p>{t("checkoutNoProducts")}</p>
            )}
          </div>

          <div className="order-summary">
            <p>
              {t("checkoutSubtotal")}: <strong>${subtotal.toFixed(2)}</strong>
            </p>
            <p>
              {t("checkoutShippingCost")}: <strong>${shippingCost.toFixed(2)}</strong>
            </p>
            <h3>
              {t("checkoutTotal")}: <strong>${(subtotal + shippingCost).toFixed(2)}</strong>
            </h3>
          </div>

          <button className="final-pay-btn" onClick={handleFinalizePayment}>
            {t("checkoutFinalizePayment")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutUserInfo;
