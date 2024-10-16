import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginMenu from "./components/auth/login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/CartContext";
import Home from './components/home/Home';
import Register from "./components/auth/register";
import Products from './components/Productos/Products';
import MalkeVirgen from './components/BuyProducts/MalkeVirgen';
import Checkout from './components/Checkout/Checkout';
import NuestraHistoria from './components/NuestraHistoria/NuestraHistoria';
import Cocteles from './components/Cocteles/Cocteles';
import Procesos from './components/Procesos/Procesos';
import AdminHome from './components/dashboard/AdminHome';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Reconocimientos from './components/Reconocimientos/Reconocimientos';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            {/*Rutas publicas*/}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginMenu />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/MalkeVirgen" element={<MalkeVirgen />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/NuestraHistoria" element={<NuestraHistoria />} />
            <Route path='/Cocteles' element={<Cocteles/>}/>
            <Route path='/Procesos' element={<Procesos/>}/>
            <Route path='/Reconocimientos' element={<Reconocimientos/>}/>

            {/*Rutas protegidas*/}
            <Route path='/dashboard' element={
              <ProtectedRoute role="admin">
                <AdminHome />

              </ProtectedRoute>
            }/>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
