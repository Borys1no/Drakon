import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import "./register.css"; // Importa los estilos

const Register = () => {
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
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    setIsRegistering(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password, fullName, cedula);
      navigate("/home"); // Redirigir tras el registro
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsRegistering(false);
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/home" replace={true} />}

      <main className="R-main">
        <div className="R-container">
          <div className="R-header">
            <h3 className="R-title">Create a New Account</h3>
          </div>
          <form onSubmit={onSubmit} className="R-form">
            <div>
              <label className="R-label">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="R-input"
              />
            </div>
            <div>
              <label className="R-label">Cédula</label>
              <input
                type="text"
                required
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                className="R-input"
              />
            </div>

            <div>
              <label className="R-label">Email</label>
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
              <label className="R-label">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="R-input"
              />
            </div>

            <div>
              <label className="R-label">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="R-input"
              />
            </div>

            {errorMessage && (
              <span className="R-errorMessage">{errorMessage}</span>
            )}

            <button type="submit" disabled={isRegistering} className="R-button">
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="R-textCenter">
              Already have an account?{" "}
              <Link to="/login" className="R-link">
                Continue
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
