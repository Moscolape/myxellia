import React from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";

/**
 * Props for SearchBar component
 */
type SearchBarProps = {
  placeholder?: string;
  type?: string;
  className?: string;
};

/**
 * SearchBar Component
 *
 * Displays a search input with an icon. Supports custom styling via className.
 */
const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  type,
  className
}) => {
  return (
    <div className="flex items-center bg-[#f5f5f5] rounded-xl px-3 py-2 w-full max-w-md border border-[#919191] group">
      <Icon src={assets.searchIcon} alt="Search" size={18} className="group-hover:rotate-360"/>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default SearchBar;