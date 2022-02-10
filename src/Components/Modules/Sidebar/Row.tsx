import Link from "next/link";
import React from "react";

type SidebarRowProps = {
  children: React.ReactNode;
  link: string;
  active?: boolean;
};

const SidebarRow: React.FC<SidebarRowProps> = ({ children, link, active }) => {
  return (
    <Link href={link} passHref>
      <li>
        <a
          className={`nav-link px-5 text-white d-flex align-items-center gap-2 ${
            active ? "active font-weight-bold" : ""
          }`}
        >
          {children}
        </a>
      </li>
    </Link>
  );
};

export default SidebarRow;
