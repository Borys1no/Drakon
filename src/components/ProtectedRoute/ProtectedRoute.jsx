import React from 'react';
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const { currentUser, role: userRole } = useAuth();  // Desestructuramos el currentUser y el rol del usuario

  // Verifica si el usuario está autenticado
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Verifica si el rol del usuario es el adecuado
  if (userRole !== role) {
    return <Navigate to="/home" replace />;
  }

  // Si todo está bien, renderiza los componentes hijos
  return children;
};

export default ProtectedRoute;
