import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState } from "react"; // Importar useState para manejar la verificación
import LoginMenu from "./components/auth/login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/CartContext";
import Home from "./components/home/Home";
import Register from "./components/auth/register";
import Products from "./components/Productos/Products";
import DrakonDestilado from "./components/BuyProducts/MalkeVirgen";
import Checkout from "./components/Checkout/Checkout";
import NuestraHistoria from "./components/NuestraHistoria/NuestraHistoria";
import Cocteles from "./components/Cocteles/Cocteles";
import Procesos from "./components/Procesos/Procesos";
import AdminHome from "./components/dashboard/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Reconocimientos from "./components/Reconocimientos/Reconocimientos";
import PasarelaPago from "./components/PasarelaPago/PasarelaPago";
import Pedidos from "./components/dashboard/Pedidos/Pedidos";
import AgeVerificationPopup from "./components/AgeVerificationPopup/AgeVerificationPopup"; // Importar el pop-up

const App = () => {
  const [isVerified, setIsVerified] = useState(false); // Estado para la verificación de edad

  if (!isVerified) {
    // Mostrar el pop-up mientras no esté verificado
    return <AgeVerificationPopup onVerify={() => setIsVerified(true)} />;
  }

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Rutas públicas con Navbar */}
            <Route element={<WithNavbar />}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<LoginMenu />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/DrakonDestilado" element={<DrakonDestilado />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/NuestraHistoria" element={<NuestraHistoria />} />
              <Route path="/Cocteles" element={<Cocteles />} />
              <Route path="/Procesos" element={<Procesos />} />
              <Route path="/Reconocimientos" element={<Reconocimientos />} />
              <Route path="/cn" element={<PasarelaPago />} />
            </Route>
            {/* Rutas del administrador */}
            <Route
              path="/dashboard/Pedidos"
              element={
                <ProtectedRoute role="admin">
                  <Pedidos />
                </ProtectedRoute>
              }
            />
            {/* Rutas protegidas sin Navbar */}
            <Route
              path="/dashboard/AdminHome"
              element={
                <ProtectedRoute role="admin">
                  <AdminHome />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

// Componente para las rutas que incluyen el Navbar
const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se renderizarán los componentes hijos */}
    </>
  );
};

export default App;
