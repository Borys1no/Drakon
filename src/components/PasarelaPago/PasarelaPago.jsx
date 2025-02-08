import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { CartContext } from '../../contexts/CartContext'; // Importar el contexto del carrito
import './PasarelaPago.css';

const PasarelaPago = () => {
  const [userEmail, setUserEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { total = 0 } = location.state || {};
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [onAuthorizeDefined, setOnAuthorizeDefined] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const payButtonRef = useRef(null);
  const { clearCart } = useContext(CartContext); // Obtener la función para vaciar el carrito

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const [data, setData] = useState({
    PayboxRemail: 'agenda.reumasur@gmail.com',
    PayboxSendmail: userEmail || 'correo_cliente@example.com',
    PayboxRename: 'Nombre del Vendedor',
    PayboxSendname: 'Nombre del Cliente',
    PayboxBase0: (Number(total) || 0).toFixed(2),
    PayboxBase12: '0.00',
    PayboxDescription: 'Compra en E-commerce',
    PayboxProduction: false,
    PayboxEnvironment: 'sandbox',
    PayboxLanguage: 'es',
    PayboxPagoPlux: true,
    PayboxDirection: 'Dirección del cliente',
    PayBoxClientPhone: '1234567890',
  });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      PayboxSendmail: userEmail || 'correo_cliente@example.com',
    }));
  }, [userEmail]);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://sandbox-paybox.pagoplux.com/paybox/index.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      script.onerror = () => console.error("Error al cargar el script de PagoPlux.");
      document.body.appendChild(script);
      return () => document.body.removeChild(script);
    }
  }, [scriptLoaded]);

  useEffect(() => {
    if (scriptLoaded && !onAuthorizeDefined) {
      window.onAuthorize = async function (response) {
        if (response.status === 'succeeded') {
          alert("Pago exitoso. Gracias por su compra.");
          clearCart();
        } else {
          alert("Pago fallido. Por favor, inténtelo de nuevo.");
        }
      };
      setOnAuthorizeDefined(true);
    }
  }, [scriptLoaded, onAuthorizeDefined, clearCart, navigate]);

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
      console.log("Iniciando pago con los datos:", data);
      window.Data.init(data);
    } else {
      console.error("Data no está definido. Verifica que el script de PagoPlux esté cargado.");
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
      >
      </button>
    </div>
  );
};

export default PasarelaPago;
