import React from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";

type SearchBarProps = {
  placeholder?: string;
  type?: string;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  type,
  className
}) => {
  return (
    <div className="flex items-center bg-[#f5f5f5] rounded-xl px-3 py-2 w-full max-w-md border border-[#919191]">
      <Icon src={assets.searchIcon} alt="Search" size={18} />
      <input
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default SearchBar;
