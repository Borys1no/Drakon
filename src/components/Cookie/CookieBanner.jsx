import React, { useState, useEffect, useRef } from "react";
import './styles.css';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const bannerRef = useRef(null); // Usamos un ref para el banner

    useEffect(() => {
        // Verificar si ya se aceptaron las cookies
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setShowBanner(true);
        }

        // Asegúrate de que bannerRef tenga valor
        if (bannerRef.current) {
            const shadowRoot = bannerRef.current.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = `
              <style>
                @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
              </style>
              <div class="alert alert-warning fixed-bottom m-0 p-2" role="alert">
                Usamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar, aceptas nuestra política de cookies. <button class="btn btn-primary">Aceptar</button>
              </div>
            `;
        }
    }, []);

    // Función para aceptar cookies
    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true"); // Usar localStorage
        setShowBanner(false); // Ocultar el banner
    };

    if (!showBanner) return null; // Si no se debe mostrar, no renderizar nada

    return <div ref={bannerRef} onClick={handleAccept}></div>;
};

export default CookieBanner;
