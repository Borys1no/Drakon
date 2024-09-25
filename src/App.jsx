import React from 'react';
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
  );
};

export default App;


