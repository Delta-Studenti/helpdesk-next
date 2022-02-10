import React from "react";
import Sidebar from "../Modules/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="vh-100" >
      <div className="row h-100">
        <Sidebar />
        <section className="col"> {children}</section>
      </div>
    </div>
  );
};

export default MainLayout;
