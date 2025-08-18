import React from "react";
import NavLink from "../ui/NavLinks";
import SearchBar from "../ui/SearchBar";
import { assets } from "../../constants/assets";

const navItems = [
  {
    src: assets.dashboardIcon,
    alt: "Dashboard Icon",
    label: "Dashboard",
    to: "/",
  },
  {
    src: assets.listingsIcon,
    alt: "Listings Icon",
    label: "Listings",
    disabled: true,
  },
  {
    src: assets.usersIcon,
    alt: "Users Icon",
    label: "Users",
    disabled: true,
  },
  {
    src: assets.requestIcon,
    alt: "Request Icon",
    label: "Request",
    disabled: true,
  },
  {
    src: assets.applicationsIcon,
    alt: "Applications Icon",
    label: "Applications",
    disabled: true,
  },
];

const NAV_HEIGHT = "5.125rem";

const Navigation: React.FC = () => {
  return (
    <nav
      className={`flex items-center justify-between h-[4.1875rem] px-12 bg-white border-b border-[#f4f4f5] w-full fixed top-[${NAV_HEIGHT}] z-40`}
    >
      <div className="flex gap-12 py-2.5">
        {navItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
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
