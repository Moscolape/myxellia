import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import Icon from "../ui/Icons";

/**
 * Props for a navigation link
 */
type NavLinkProps = {
  src: string;
  alt: string;
  label: string;
  to?: string;
  size?: number;
  disabled?: boolean;
};

/**
 * NavLink Component
 *
 * Displays a navigation link with an icon and label.
 * Supports disabled state and highlights active link using react-router's NavLink.
 */
const NavLink: React.FC<NavLinkProps> = ({
  src,
  alt,
  label,
  to = "#",
  size = 20,
  disabled = false,
}) => {
  const baseClasses =
    "flex items-center gap-2 transition-colors duration-200 text-sm";

  if (disabled) {
    return (
      <div
        className={`${baseClasses} text-gray-400 cursor-default pointer-events-none`}
        title={label}
      >
        <Icon src={src} alt={alt} size={size} />
        <span>{label}</span>
      </div>
    );
  }

  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${
          isActive
            ? "text-black font-semibold bg-[#f5f5f5] rounded-lg px-3 py-2"
            : "text-[#3d3d3d] hover:text-gray-500"
        }`
      }
      title={label}
    >
      <Icon src={src} alt={alt} size={size} />
      <span>{label}</span>
    </RouterNavLink>
  );
};

export default NavLink;
