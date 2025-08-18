import React from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";

type OverviewCardProps = {
  title: string;
  iconUrl: string;
  children?: React.ReactNode;
};

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  iconUrl,
  children,
}) => {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow h-[8.5rem]">
      <div className="flex items-center justify-between bg-[#f9fafb] p-4 border-b border-b-[#e4e4e4]">
        <div className="flex items-center font-medium">
          <Icon src={iconUrl} alt={`${title} icon`} />
          <h3 className="text-sm pl-3">{title}</h3>
        </div>
        <span className="text-[0.75rem] text-[#4545fe] flex items-center gap-1">
          View all{" "}
          <Icon
            src={assets.chevronRightIcon}
            alt="Side Icon"
            size={18}
            className="cursor-pointer opacity-50"
          />
        </span>
      </div>
      <div className="p-4 flex items-center justify-between h-[calc(100%-3rem)]">
        {children}
      </div>
    </div>
  );
};

export default OverviewCard;
