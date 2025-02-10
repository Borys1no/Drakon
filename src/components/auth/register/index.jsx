import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import "./register.css";

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cedula, setCedula] = useState("");
  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage(t("registerPasswordsDontMatch"));
      return;
    }

    setIsRegistering(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password, fullName, cedula);
      navigate("/home");
    } catch (error) {
      setErrorMessage(t("registerError", { error: error.message }));
    }
    setIsRegistering(false);
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/home" replace={true} />}

      <main className="R-main">
        <div className="R-container">
          <div className="R-header">
            <h3 className="R-title">{t("registerTitle")}</h3>
          </div>
          <form onSubmit={onSubmit} className="R-form">
            <div>
              <label className="R-label">{t("registerFullName")}</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="R-input"
              />
            </div>
            <div>
              <label className="R-label">{t("registerCedula")}</label>
              <input
                type="text"
                required
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                className="R-input"
              />
            </div>

            <div>
              <label className="R-label">{t("registerEmail")}</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="R-input"
              />
            </div>

            <div>
              <label className="R-label">{t("registerPassword")}</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="R-input"
              />
            </div>

            <div>
              <label className="R-label">{t("registerConfirmPassword")}</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="R-input"
              />
            </div>

            {errorMessage && <span className="R-errorMessage">{errorMessage}</span>}

            <button type="submit" disabled={isRegistering} className="R-button">
              {isRegistering ? t("registerSigningUp") : t("registerSignUp")}
            </button>

            <div className="R-textCenter">
              {t("registerAlreadyHaveAccount")}{" "}
              <Link to="/login" className="R-link">
                {t("registerContinue")}
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
