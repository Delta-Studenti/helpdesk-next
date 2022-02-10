import Head  from "next/head";
import React from "react";
import { SidebarItemType } from "../../types/sidebar";
import { Sidebar } from "../Modules/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
  title: string;
  sidebarTab?: SidebarItemType
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, sidebarTab }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container p-0 m-0">
        <div className="row">
          <Sidebar sidebarTab={sidebarTab}/>
          <main className="col overflow-auto">{children} </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
