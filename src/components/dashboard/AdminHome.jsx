import React from "react";
import "./Dashboard.css";
import SideBar from "./SideBar";
import DashboardStats from "./DashboardStats";
import DashQuantityPro from "./DashQuantityPro";
import ProductManagement from "./ProductsManagement";

const AdminHome = () => {
  return (
    <div  className="admin-container">
      <SideBar />
      <div className="app-container">
        <div className="main-container">
        <div className="txt-title">
        <h1>Bienvenido administrador</h1>
        </div>
        <div className="stats-container">
        <DashboardStats />
        <DashQuantityPro />

        </div>
        
        <ProductManagement />

        </div>
      </div>
    </div>
  );
};

export default AdminHome;
