import React from "react";

interface TooltipProps {
  text: string;
  isVisible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm bg-gray-800 text-white rounded-md shadow-lg z-50">
      {text}
    </div>
  );
};

export default Tooltip;