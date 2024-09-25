import React from 'react';
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes  } from 'react-router-dom';
import LoginMenu from "./components/auth/login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/authContext";
import Home from './components/home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Navbar />} />
        <Route path="/login" element={<LoginMenu />} />
      </Routes>
    </Router>
>>>>>>> 219f5fb7501d54939afac934467b91977987f8ba
  );
};

export default App;
