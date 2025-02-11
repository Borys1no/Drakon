import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { collection, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";
import "./PasarelaPago.css"; // Importar el CSS personalizado

const PasarelaPago = () => {
  const location = useLocation();
  const { total = 0, cartItems = [] } = location.state || {}; // Obtener el valor total del carrito

  const [scriptLoaded, setScriptLoaded] = useState(false); // Estado para controlar si el script ya se cargó
  const [onAuthorizeDefined, setOnAuthorizeDefined] = useState(false); // Estado para controlar si onAuthorize ya se definió
  const [isReady, setIsReady] = useState(false); // Estado para controlar si todo está listo
  const payButtonRef = useRef(null); // Referencia al botón de pago
  const [userEmail, setUserEmail] = useState(""); // Estado para almacenar el correo del usuario
  const [user, setUser] = useState(null); // Estado para almacenar el usuario autenticado
  const [userData, setUserData] = useState({
    PayboxSendname: "",
    PayboxDirection: "",
    PayBoxClientPhone: "",
    PayBoxClientIdentification: "",
  });
  const navigate = useNavigate(); // Hook de navegación
  const { clearCart } = useContext(CartContext); // Función para limpiar el carrito

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user); // Almacenar el usuario en el estado
        setUserEmail(user.email);
        await fetchUserData(user.uid);
      } else {
        setUser(null); // Limpiar el estado del usuario
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
      const userDoc = await getDoc(doc(db, "useres", userId));
      if (userDoc.exists()) {
        setUserData({
          PayboxSendname: userDoc.data().name || "Nombre del Cliente",
          PayboxDirection: userDoc.data().address || "Dirección del cliente",
          PayBoxClientPhone: userDoc.data().phone || "1234567890",
          PayBoxClientIdentification:
            userDoc.data().id || "Cedula tarjetahabiente",
        });
      }
    } catch (error) {
      console.error("Error obteniendo los datos del usuario:", error);
    }
  };

  const [data, setData] = useState({
    PayboxRemail: "drakon-adm@outlook.com", // Correo del vendedor
    PayboxSendmail: userEmail || "correo_cliente@example.com", // Correo del cliente (puedes cambiarlo dinámicamente)
    PayboxRename: "Nombre del Vendedor", // Nombre del vendedor
    PayboxSendname: "Nombre del Cliente", // Nombre del cliente (puedes cambiarlo dinámicamente)
    PayboxBase0: total.toFixed(2), // Valor total del carrito
    PayboxBase12: "0.00", // Impuestos (si aplica)
    PayboxDescription: "Compra en E-commerce", // Descripción del pago
    PayboxProduction: false, // Modo sandbox (cambiar a true en producción)
    PayboxEnvironment: "sandbox", // Entorno sandbox (cambiar a 'production' en producción)
    PayboxLanguage: "es", // Idioma del modal de pago
    PayboxPagoPlux: true, // Usar un botón personalizado
    ...userData,
  });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      PayboxSendmail: userEmail || "correo_cliente@example.com",
      ...userData,
    }));
  }, [userEmail, userData]);

  // Cargar el script de PagoPlux dinámicamente
  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://sandbox-paybox.pagoplux.com/paybox/index.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      script.onerror = () =>
        console.error("Error al cargar el script de PagoPlux.");
      document.body.appendChild(script);
      return () => document.body.removeChild(script);
    }
  }, [scriptLoaded]);

  // Definir la función onAuthorize solo una vez
  useEffect(() => {
    if (scriptLoaded && !onAuthorizeDefined) {
      window.onAuthorize = async function (response) {
        if (response.status === "succeeded") {
          try {
            await addDoc(collection(db, "orders"), {
              userId: user.uid, // Usar el usuario almacenado en el estado
              userEmail: user.email,
              products: cartItems.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity, // Aquí incluimos la cantidad
              })),
              totalAmount: total,
              timestamp: Timestamp.now(),
            });
            // Pago exitoso
            alert("Pago exitoso. Gracias por su compra.");
            clearCart(); // Limpiar el carrito
            navigate("/Home"); // Redirigir al inicio
          } catch (error) {
            console.error("Error al guardar la orden:", error);
            alert("Error al guardar la orden. Por favor, inténtelo de nuevo.");
          }
        } else {
          // Pago fallido
          alert("Pago fallido. Por favor, inténtelo de nuevo.");
        }
      };

      setOnAuthorizeDefined(true); // Marcar que onAuthorize ya se definió
    }
  }, [scriptLoaded, onAuthorizeDefined, clearCart, navigate, user, total]);

  // Verificar si todo está listo
  useEffect(() => {
    if (scriptLoaded && onAuthorizeDefined) {
      setIsReady(true);
    }
  }, [scriptLoaded, onAuthorizeDefined]);

  // Simular un clic automático cuando todo esté listo
  useEffect(() => {
    if (isReady && payButtonRef.current) {
      payButtonRef.current.click(); // Simular un clic en el botón de pago
    }
  }, [isReady]);

  const handlePayment = () => {
    if (window.Data) {
      console.log("Iniciando proceso de pago con los siguientes datos:", data);
      window.Data.init(data); // Iniciar el proceso de pago
    } else {
      console.error(
        "Data no está definido. Asegúrate de que el script de PagoPlux esté cargado."
      );
    }
  };

  return (
    <div className="pasarela-pago-container">
      <h1>Pago con Tarjeta</h1>
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

export default PasarelaPago;