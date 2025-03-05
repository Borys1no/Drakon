import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { collection, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";
import Swal from "sweetalert2";
import "./PasarelaPago.css"; // Importar el CSS personalizado

const PaymentButton = ({ total, cartItems }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [onAuthorizeDefined, setOnAuthorizeDefined] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const payButtonRef = useRef(null);
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    PayboxSendname: "",
    PayboxDirection: "",
    PayBoxClientPhone: "",
    PayBoxClientIdentification: "",
  });
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        setUserEmail(user.email);
        await fetchUserData(user.uid);
      } else {
        setUser(null);
        setUserEmail("");
        setUserData({
          PayboxSendname: "",
          PayboxDirection: "",
          PayBoxClientPhone: "",
          PayBoxClientIdentification: "",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const data = userDoc.data();
        console.log("Datos obtenidos del usuario:", data);
        setUserData({
          PayboxSendname: userDoc.data().nombre || "Nombre del Cliente",
          PayboxDirection: userDoc.data().direccion || "Dirección del cliente",
          PayBoxClientPhone: userDoc.data().telefono || "1234567890",
          PayBoxClientIdentification:
            userDoc.data().cedula || "Cedula tarjetahabiente",
        });
      }
    } catch (error) {
      console.error("Error obteniendo los datos del usuario:", error);
    }
  };

  useEffect(() => {
    console.log("Estado actualizado de userData:", userData);
  }, [userData]);

  const [data, setData] = useState({
    PayboxRemail: "drakon-adm@outlook.com",
    PayboxSendmail: userEmail || "correo_cliente@example.com",
    PayboxRename: "Nombre del Vendedor",
    PayboxSendname: "Nombre del Cliente",
    PayboxBase0: total.toFixed(2),
    PayboxBase12: "0.00",
    PayboxDescription: "Compra en E-commerce",
    PayboxProduction: false,
    PayboxEnvironment: "sandbox",
    PayboxLanguage: "es",
    PayboxPagoPlux: true,
    ...userData,
  });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      PayboxSendmail: userEmail || "correo_cliente@example.com",
      ...userData,
    }));
  }, [userEmail, userData]);

  useEffect(() => {
    if (!scriptLoaded && !document.querySelector('script[src="https://sandbox-paybox.pagoplux.com/paybox/index.js"]')) {
      const script = document.createElement("script");
      script.src = "https://sandbox-paybox.pagoplux.com/paybox/index.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      script.onerror = () => console.error("Error al cargar el script de PagoPlux.");
      document.body.appendChild(script);
    }
  }, [scriptLoaded]);

  useEffect(() => {
    if (scriptLoaded && !onAuthorizeDefined && userData.PayboxSendname) {
      console.log("Definiendo la función onAuthorize...", userData);

      window.onAuthorize = async function (response) {
        console.log("Respuesta del pago:", response);

        if (response.status === "succeeded") {
          try {
            console.log(" Datos enviados a Firestore:", {
              userId: user.uid,
              userEmail: user.email,
              userName: userData.PayboxSendname,
              userAddress: userData.PayboxDirection,
              userPhone: userData.PayBoxClientPhone,
              userIdentification: userData.PayBoxClientIdentification,
              products: cartItems,
              totalAmount: total,
            });

            await addDoc(collection(db, "orders"), {
              userId: user.uid,
              userEmail: user.email,
              userName: userData.PayboxSendname,
              userAddress: userData.PayboxDirection,
              userPhone: userData.PayBoxClientPhone,
              userIdentification: userData.PayBoxClientIdentification,
              products: cartItems.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              })),
              totalAmount: total,
              timestamp: Timestamp.now(),
              status: "Pendiente",
            });
            Swal.fire({
              title: "¡Pago exitoso!",
              text: "Gracias por su compra.",
              icon: "success",
              confirmButtonText: "Aceptar",
            });
            clearCart();
            navigate("/Home");
          } catch (error) {
            console.error("Error al guardar la orden:", error);
            Swal.fire({
              title: "Error",
              text: "Error al guardar la orden. Por favor, inténtelo de nuevo.",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          }
        } else {
          alert("Pago fallido. Por favor, inténtelo de nuevo.");
        }
      };

      setOnAuthorizeDefined(true);
    }
  }, [scriptLoaded, onAuthorizeDefined, userData, clearCart, navigate, user, total, cartItems]);

  useEffect(() => {
    if (scriptLoaded && onAuthorizeDefined) {
      setIsReady(true);
    }
  }, [scriptLoaded, onAuthorizeDefined]);

  useEffect(() => {
    if (isReady && payButtonRef.current) {
      payButtonRef.current.click();
    }
  }, [isReady]);

  const handlePayment = () => {
    if (window.Data) {
      console.log("Iniciando proceso de pago con los siguientes datos:", data);
      window.Data.init(data);
    } else {
      console.error(
        "Data no está definido. Asegúrate de que el script de PagoPlux esté cargado."
      );
    }
  };

  return (
    <div className="pasarela-pago-container">
      <div id="modalPaybox"></div>
      <button
        id="pay"
        className="buttonpay"
        onClick={handlePayment}
        disabled={!isReady}
        ref={payButtonRef}
      ></button>
    </div>
  );
};

export default PaymentButton;