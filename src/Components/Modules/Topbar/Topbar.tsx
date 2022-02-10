import React from "react";
import Link from "next/link";

const Topbar: React.FC = () => {
  return (
    <div className="">
      <nav className="navbar navbar-dark bg-dark text-white px-3 d-flex align-items-center gap-2" >
        <Link href="/" passHref>
          <h2>Helpdesk</h2>
        </Link> 
      </nav>
    </div>
  );
};

export default Topbar;
