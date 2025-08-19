import React from "react";
import Icon from "./Icons";

/**
 * Props for StatCard component
 */
type StatCardProps = {
  label: string;
  textColor: string;
  value: number | string;
  metric: number | string;
  iconSrc: string;
  iconAlt: string;
  iconSize: number;
};

/**
 * StatCard Component
 *
 * Displays a metric card with a value, label, and percentage change with icon.
 */
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
      {/* Value */}
      <div>
        <h3 className="text-xl font-bold" style={{ color: textColor }}>
          ₦{value}
        </h3>
      </div>

      {/* Label and metric change */}
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