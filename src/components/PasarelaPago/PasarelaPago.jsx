import React, { useState, useEffect } from 'react';
import './PasarelaPago.css';

const PasarelaPago = () => {
  const [data, setData] = useState({
    PayboxRemail: 'tu_correo_registrado@dominio.com', // Cambia este valor a tu correo registrado en PagoPlux
    PayboxSendmail: 'correo_cliente@example.com',
    PayboxRename: 'Nombre del Establecimiento',
    PayboxSendname: 'Nombre Cliente',
    PayboxBase0: '10.00',
    PayboxBase12: '12.00',
    PayboxDescription: 'Pago de Servicios Médicos',
    PayboxProduction: false,
    PayboxEnvironment: 'sandbox',
    PayboxLanguage: 'es',
    PayboxPagoPlux: true,
    PayboxDirection: 'Dirección del Cliente',
    PayBoxClientPhone: '1234567890',
  });

  useEffect(() => {
    // Verificar que el script de PagoPlux esté cargado
    if (!window.Data) {
      console.error("El script de PagoPlux no se cargó correctamente.");
    }
  }, []);

  const handlePayment = () => {
    console.log("Intentando iniciar el pago con los siguientes datos:", data); // Verifica los datos de pago
    if (window.Data) {
      window.Data.init(data); // Llamada directa a la función de PagoPlux
    } else {
      console.error("Data no está definido. Asegúrate de que el script de PagoPlux esté correctamente incluido en tu HTML.");
    }
  };

  return (
    <div className="pasarela-pago-container">
      <h1>Pago con Tarjeta</h1>
      {/* Div para el modal de PagoPlux */}
      <div id="modalPaybox"></div>
      {/* Botón de pago */}
      <button
        id="pay"
        type="button"
        onClick={handlePayment}
      >
      </button>
    </div>
  );
};

export default PasarelaPago;
