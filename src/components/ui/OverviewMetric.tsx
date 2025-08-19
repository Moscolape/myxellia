import React from "react";

/**
 * Props for OverviewMetric component
 */
type StatItemProps = {
  label: string;
  value: string | number;
};

/**
 * OverviewMetric Component
 *
 * Displays a single statistic with label and value.
 */
const OverviewMetric: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col justify-center p-2">
      <span className="text-sm font-medium text-[#525252]">{label}</span>
      <span className="text-xl font-semibold text-[#141414]">{value}</span>
    </div>
  );
};

export default OverviewMetric;
