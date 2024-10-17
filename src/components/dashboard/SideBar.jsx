import React from 'react'
import { assets } from '../../assets/assets';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar-container">
        <div className="sidebar">
            <a href="#">Ordenes</a>
            <a href="#">Productos</a>
            <a href="#">Configuracion</a>
        </div>
        <div className="perfil">

        </div>
    </div>
  )
}

export default SideBar