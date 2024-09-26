import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes  } from 'react-router-dom';
import LoginMenu from "./components/auth/login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/authContext";
import Home from './components/home/Home';
import Register from "./components/auth/register";
import Products from './components/Productos/Products';
import MalkeVirgen from './components/BuyProducts/MalkeVirgen';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginMenu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/MalkeVirgen" element={<MalkeVirgen />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
