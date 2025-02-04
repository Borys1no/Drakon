import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PasarelaPago.css'; // Importar el CSS personalizado

const PasarelaPago = () => {
  const location = useLocation();
  const { total } = location.state || { total: 0 }; // Obtener el valor total del carrito

  const [data, setData] = useState({
    PayboxRemail: 'agenda.reumasur@gmail.com', // Correo del vendedor
    PayboxSendmail: 'correo_cliente@example.com', // Correo del cliente (puedes cambiarlo dinámicamente)
    PayboxRename: 'Nombre del Vendedor', // Nombre del vendedor
    PayboxSendname: 'Nombre del Cliente', // Nombre del cliente (puedes cambiarlo dinámicamente)
    PayboxBase0: total.toFixed(2), // Valor total del carrito
    PayboxBase12: '0.00', // Impuestos (si aplica)
    PayboxDescription: 'Compra en E-commerce', // Descripción del pago
    PayboxProduction: false, // Modo sandbox (cambiar a true en producción)
    PayboxEnvironment: 'sandbox', // Entorno sandbox (cambiar a 'production' en producción)
    PayboxLanguage: 'es', // Idioma del modal de pago
    PayboxPagoPlux: true, // Usar un botón personalizado
    PayboxDirection: 'Dirección del cliente', // Dirección del cliente (puedes cambiarlo dinámicamente)
    PayBoxClientPhone: '1234567890', // Teléfono del cliente (puedes cambiarlo dinámicamente)
  });

  const [scriptLoaded, setScriptLoaded] = useState(false); // Estado para controlar si el script ya se cargó
  const [onAuthorizeDefined, setOnAuthorizeDefined] = useState(false); // Estado para controlar si onAuthorize ya se definió
  const [isReady, setIsReady] = useState(false); // Estado para controlar si todo está listo
  const payButtonRef = useRef(null); // Referencia al botón de pago

  // Cargar el script de PagoPlux dinámicamente
  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://sandbox-paybox.pagoplux.com/paybox/index.js';
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true); // Marcar que el script se cargó
      };
      script.onerror = () => {
        console.error("Error al cargar el script de PagoPlux.");
      };
      document.body.appendChild(script);

      // Limpiar el script cuando el componente se desmonte
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]);

  // Definir la función onAuthorize solo una vez
  useEffect(() => {
    if (scriptLoaded && !onAuthorizeDefined) {
      window.onAuthorize = async function (response) {
        if (response.status === 'succeeded') {
          // Pago exitoso
          alert("Pago exitoso. Gracias por su compra.");
          // Aquí puedes redirigir a una página de confirmación o hacer otras acciones
        } else {
          // Pago fallido
          alert("Pago fallido. Por favor, inténtelo de nuevo.");
        }
      };

      setOnAuthorizeDefined(true); // Marcar que onAuthorize ya se definió
    }
  }, [scriptLoaded, onAuthorizeDefined]);

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
      window.Data.init(data); // Iniciar el proceso de pago
    } else {
      console.error("Data no está definido.");
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