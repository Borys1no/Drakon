import React from 'react'
import './Dashboard.css'
import SideBar from './SideBar';
import {DashborardStats} from './DashboardStats';

const AdminHome = () => {
  return (
    <div>
      <SideBar />
      <div className="txt-title">
      <h1>Bienvenido administrador</h1>

      </div>
      
    </div>
  )
}

export default AdminHome;