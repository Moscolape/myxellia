import React from "react";
import Tabs from "../ui/Tabs";
import StatCard from "../ui/StatCard";
import { assets } from "../../constants/assets";

const SalesOverviewCard: React.FC = () => {
  return (
    <div className="col-span-2 bg-white rounded-2xl shadow">
      <div className="flex items-center justify-between mb-4 p-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
          <span className="text-[#606060] text-[0.75rem]">
            Showing overview Jan 2022 - Sep 2022
          </span>
        </div>
        <button className="font-medium text-[0.75rem] border border-[#d6d6d6] text-[#191919] px-7 py-3 rounded-3xl">
          View Transactions
        </button>
      </div>

      <Tabs />

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="col-span-1 bg-gray-50 rounded-xl flex items-center justify-center">
          <span className="text-gray-400 text-sm">[Chart Placeholder]</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard
            label="Total Inflow"
            value="120,000,000.00"
            iconSrc={assets.metricUpGreenIcon}
            iconAlt="Inflow Icon"
            iconSize={14}
            metric={2.5}
            textColor="#4545FE"
          />
          <StatCard
            label="MRR"
            value="50,000,000.00"
            iconSrc={assets.metricUpGreenIcon}
            iconAlt="MRR Icon"
            iconSize={14}
            metric={2.5}
            textColor="#12B76A"
          />
          <StatCard
            label="Commission Revenue"
            value="200,000,000.00"
            iconSrc={assets.metricNeutralGreenIcon}
            iconAlt="Commission Icon"
            iconSize={14}
            metric={0.5}
            textColor="#14B8A6"
          />
          <StatCard
            label="GMV"
            value="100,000,000.00"
            iconSrc={assets.metricDownRedIcon}
            iconAlt="GMV Icon"
            iconSize={14}
            metric={0.5}
            textColor="#F04438"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewCard;
