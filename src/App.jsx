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
import Orders from './components/dashboard/Orders';
import ProductsManagement from './components/dashboard/ProductsManagement';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


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

            {/*Rutas protegidas*/}
            <Route path='/dashboard' element={
              <ProtectedRoute role="encargado">
                <AdminHome />

              </ProtectedRoute>
            }/>
            <Route path='/dashboard/Orders' element={
              <ProtectedRoute role="encargado">
                <Orders />

              </ProtectedRoute>
            }
            
            />

            <Route path='/dashboard/ProductsManagement' element={
              <ProtectedRoute role="encargado">
                <ProductsManagement/>

              </ProtectedRoute>
            }
            
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
