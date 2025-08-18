import React from "react";
import Icon from "../ui/Icons";

type StatCardProps = {
  label: string;
  textColor: string;
  value: number | string;
  metric: number | string;
  iconSrc: string;
  iconAlt: string;
  iconSize: number;
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  textColor,
  value,
  iconSrc,
  iconAlt,
  iconSize,
  metric,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-[#e4e4e4] p-4">
      <div>
        <h3 className="text-xl font-bold" style={{ color: textColor }}>
          ₦{value}
        </h3>
      </div>
      <div className="flex items-center pt-3">
        <span className="block font-medium pr-2 text-[0.625rem]">{label}</span>
        <Icon src={iconSrc} alt={iconAlt} size={iconSize} />
        <span
          className="block font-medium pl-1 text-[0.625rem]"
          style={{ color: textColor }}
        >
          {metric}%
        </span>
      </div>
    </div>
  );
};

export default StatCard;
