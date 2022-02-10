import Link from "next/link";
import React from "react";
import SidebarRow from "./Row";

import { AiOutlineUnorderedList, AiOutlinePlusCircle } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100 col-sm-3"
      style={{ width: "280px" }}
    >
      <Link href="/">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <h1> Sidebar</h1>
        </a>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <SidebarRow link="/" active>
          <AiOutlineUnorderedList />
          Tikety
        </SidebarRow>
        <SidebarRow link="/create-ticket">
          <AiOutlinePlusCircle />
          Vytvořit tiket
        </SidebarRow>
      </ul>
    </div>
  );
};

export default Sidebar;
