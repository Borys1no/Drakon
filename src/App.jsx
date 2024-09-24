import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginMenu from "./components/auth/login"; // Import simplificado
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navbar/>} />
        <Route path="/login" element={<LoginMenu/>} />
      </Routes>
    </Router>
  );
};

export default App;
