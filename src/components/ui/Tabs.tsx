import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1 Year");

  const tabs = ["1 Week", "1 Month", "1 Year"];

  return (
    <div className="flex justify-end gap-6 border-b border-gray-200 pb-5 pr-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-medium transition-colors px-3 py-2 cursor-pointer ${
            activeTab === tab
              ? "text-black font-semibold bg-[#f5f5f5] rounded-lg"
              : "text-[#3d3d3d] hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
