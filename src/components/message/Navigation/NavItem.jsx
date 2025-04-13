import React from 'react';
import { Link } from "react-router-dom";

const NavItem = ({ to, icon, label, isProfilePanelOpen }) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-start px-3 cursor-pointer py-3  hover:bg-[#163560] hover:text-white hover:rounded-lg ${isProfilePanelOpen ? "text-white" : "text-black"
        }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="ml-3 hidden md:block">{label}</span>
    </Link>

  );
};

export default NavItem;