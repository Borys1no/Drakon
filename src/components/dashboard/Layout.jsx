import React from "react";
import SideBar from "./SideBar";
import "./Admin.css";


const Layout = ({ children }) => {
    return(
        <div className="app-container">
            <SideBar />
            <div className="content">
                {children}
            </div>
        </div>
    );
};


export default Layout;