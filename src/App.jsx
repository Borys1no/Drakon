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
import TripleDesrilado from "./components/BuyProducts/DrakonTDestilado";
import NuestraHistoria from "./components/NuestraHistoria/NuestraHistoria";
import Cocteles from "./components/Cocteles/Cocteles";
import Procesos from "./components/Procesos/Procesos";
import PublicRoute from "./components/ProtectedRoute/PublicRoute.jsx";
import Reconocimientos from "./components/Reconocimientos/Reconocimientos";
import AgeVerificationPopup from "./components/AgeVerificationPopup/AgeVerificationPopup"; // Importar el pop-up
import CookieBanner from './components/Cookie/CookieBanner.jsx';
import './i18n'; // Import the i18n configuration file
import UserProfile from "./components/setting/userProfile.jsx";
import NotFound from "./components//home/index.jsx";






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
            {/**
          <Route path="/NotFound" element={<NotFound />} />
           */}
            {/* Rutas públicas con Navbar */}
            <Route element={<WithNavbar />}>
            {/** 
              <Route path="/" element={<Navigate to="/NotFound" />} />
              <Route path="/home" element={<Navigate to="/NotFound" /> } />
              */}
              <Route path="/" element={<Navigate to="/home" />} />
              
               
              <Route path="/home" element={ <PublicRoute><Home /> </PublicRoute> } />
              
              <Route path="/login" element={<LoginMenu />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/DrakonDestilado" element={<DrakonDestilado />} />
              <Route path="/TripleDestilado" element={<TripleDesrilado />} />
              <Route path="/NuestraHistoria" element={<NuestraHistoria />} />
              <Route path="/Cocteles" element={<Cocteles />} />
              <Route path="/Procesos" element={<Procesos />} />
              <Route path="/Reconocimientos" element={<Reconocimientos />} />
              <Route path="/userProfile" element={<UserProfile />} />
              
            </Route>
          </Routes>
          <CookieBanner/>
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