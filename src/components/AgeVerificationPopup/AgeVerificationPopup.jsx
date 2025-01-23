import React, { useState, useEffect } from "react";
import "./AgeVerificationPopup.css";
import { assets } from "../../assets/assets";

const AgeVerificationPopup = ({ onVerify }) => {
  const [birthYear, setBirthYear] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isVerified = localStorage.getItem("ageVerified");
    if (isVerified) {
      onVerify();
    }
  }, [onVerify]);

  const handleVerification = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (!birthYear) {
      setError("Por favor, ingresa tu año de nacimiento.");
    } else if (isNaN(birthYear) || birthYear.length !== 4 || birthYear > currentYear) {
      setError("Ingresa un año válido.");
    } else if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      onVerify(); // Llama a la función para permitir el acceso
    } else {
      window.location.href = "https://www.google.com/"; // Redirección para menores de edad
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <img className="imagenPopUp" src={assets.DrakonIconoSolo} alt="Imagen de introduccion" />
        <h2>POR FAVOR INGRESA TU AÑO DE NACIMIENTO</h2>
        <input
          type="text"
          placeholder="YYYY"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleVerification}>Verificar</button>
        <p className="popup-note">
          Debes tener la edad legal para comprar y consumir alcohol <br />
          Al entrar aceptas nuestros términos y condiciones, política de privacidad y cookies, <br />
          Si bebes, bebe con responsabilidad.
        </p>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;