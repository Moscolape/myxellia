import React from "react";
import { assets } from "../../constants/assets";
import HeaderIcons from "../ui/HeaderIcons";

const Header: React.FC = () => {
  return (
    <header className="w-full h-[5.125rem] px-12 bg-[#191919] text-white flex items-center justify-between">
      <img src={assets.logo} alt="Myxellia Logo" className="h-8 w-auto block" />
      <div className="flex items-center gap-6">
        <HeaderIcons />
        <h4 className="font-medium text-[1.5rem] text-black bg-white w-10 h-10 p-2 rounded-full flex items-center justify-center">
          D
        </h4>
      </div>
    </header>
  );
};

export default Header;
