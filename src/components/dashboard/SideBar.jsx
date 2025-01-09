import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import './SideBard.css';
import {Package, Combine} from 'lucide-react';

const menuItems = [
  {
    title: 'Pedidos',
    icon: Package,
  },
  {
    title: 'Estados pedidos',
    icon: Combine,
  },
];

const SideBar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try{
      await auth.signOut();
      console.log("Sesion cerrada correctamente")
      navigate('/login');
    }catch(error){
      console.error("Error al cerrar sesion: ", error);
    }

  };
  
  console.log("Usuario autenticado en SideBar:", currentUser);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <a href="#">Pedidos</a>
        <a href="#">Estados pedidos</a>
      </div>
      <div className="perfil">
        {currentUser ? (
          <p>Bienvenido, {currentUser.email}</p>
        ) : (
          <p>Cargando información...</p>
        )}
        <button className='logout-btn' onClick={handleLogout}>Cerrar sesion</button>
      </div>
    </div>
  );
};

export default SideBar;
