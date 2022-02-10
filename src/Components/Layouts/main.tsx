import React from "react";
import Sidebar from "../Modules/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
      <div className="container p-0 m-0">
    <div className="row">
        <Sidebar /> 
    <div className="col overflow-auto">{children} </div>
    </div></div>
  );
};

export default MainLayout;
