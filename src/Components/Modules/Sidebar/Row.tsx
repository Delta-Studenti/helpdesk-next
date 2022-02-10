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
          className={`font-weight-bold nav-link px-5 d-flex align-items-center gap-2 ${
            active ? "active text-light" : "text-dark"
          }`}
          role="button"
        >
          {children} 
        </a>
      </li>
    </Link>
  );
};

export default SidebarRow;
