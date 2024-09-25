import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginMenu from './components/auth/login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { AuthProvider } from './contexts/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Muestra el Navbar en todas las páginas */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginMenu />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
