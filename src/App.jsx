import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes  } from 'react-router-dom';
import LoginMenu from "./components/auth/login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/authContext";
import Home from './components/home/Home';
import Register from "./components/auth/register";
import Products from './components/Productos/Products';
import malkeVirgen from './components/BuyProducts/malkeVirgen';

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
          <Route path="/malkeVirgen" element={<malkeVirgen />} />
        </Routes>
      </Router>
    </AuthProvider>
    
  );
};

export default App;
