import React from "react";
import NavLink from "../ui/NavLinks";
import SearchBar from "../ui/SearchBar";
import { assets } from "../../constants/assets";

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-[4.1875rem] px-12 bg-white border-b border-[#f4f4f5] relative top-[5.125rem]">
      <div className="flex gap-12 py-2.5">
        <NavLink
          src={assets.dashboardIcon}
          alt="Dashboard Icon"
          label="Dashboard"
          to="/"
        />
        <NavLink
          src={assets.listingsIcon}
          alt="Listings Icon"
          label="Listings"
          disabled
        />
        <NavLink
          src={assets.usersIcon}
          alt="Users Icon"
          label="Users"
          disabled
        />
        <NavLink
          src={assets.requestIcon}
          alt="Request Icon"
          label="Request"
          disabled
        />
        <NavLink
          src={assets.applicationsIcon}
          alt="Applications Icon"
          label="Applications"
          disabled
        />
      </div>

      <SearchBar
        placeholder="Search listings, users here..."
        type="text"
        className="ml-2 w-full bg-transparent outline-none text-gray-700 text-sm"
      />
    </nav>
  );
};

export default Navigation;
