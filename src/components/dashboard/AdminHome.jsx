import React from "react";
import "./Dashboard.css";
import SideBar from "./SideBar";
import DashboardStats from "./DashboardStats";
import DashQuantityPro from "./DashQuantityPro";

const AdminHome = () => {
  return (
    <div>
      <SideBar />
      <div className="app-container">
        <div className="main-container">
        <div className="txt-title">
        <h1>Bienvenido administrador</h1>
        </div>
        <DashboardStats />
        <DashQuantityPro />

        </div>
      </div>
    </div>
  );
};

export default AdminHome;
