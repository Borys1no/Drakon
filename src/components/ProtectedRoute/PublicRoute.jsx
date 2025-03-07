import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext"; // Importa el contexto de autenticación

const PublicRoute = ({ children }) => {
  const { currentUser, userRole, loading } = useAuth(); // Obtén el usuario, su rol y el estado de carga

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se verifica la autenticación
  }

  if (currentUser && userRole === "admin") {
    return <Navigate to="/dashboard/AdminHome" replace />; // Redirige al admin a su dashboard
  }

  return children; // Renderiza el componente público si no es un administrador
};

export default PublicRoute;