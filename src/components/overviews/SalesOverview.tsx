import React, { useEffect, useState } from "react";
import Tabs from "../ui/Tabs";
import StatCard from "../ui/StatCard";
import { assets } from "../../constants/assets";
import SalesChart from "../charts/SalesChart";
import Icon from "../ui/Icons";
import { chartData, statData } from "../../data/chartData";

/**
 * Type representing the available tabs for sales overview.
 */
type TabKey = "1 Week" | "1 Month" | "1 Year";

const TAB_STORAGE_KEY = "salesOverviewTab";

/**
 * SalesOverviewCard Component
 *
 * Displays sales metrics with:
 * - Tabs for different time periods (1 Week, 1 Month, 1 Year)
 * - Sales chart using Recharts
 * - Stat cards summarizing inflow, MRR, commission, and GMV
 */

const SalesOverviewCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(() => {
    // Load saved tab from localStorage or default to "1 Year"
    const savedTab = localStorage.getItem(TAB_STORAGE_KEY) as TabKey | null;
    return savedTab || "1 Year";
  });

  useEffect(() => {
    // Persist active tab selection in localStorage
    localStorage.setItem(TAB_STORAGE_KEY, activeTab);
  }, [activeTab]);

  const currentChartData = chartData[activeTab];
  const currentStatData = statData[activeTab];

  const xKeyMap: Record<TabKey, string> = {
    "1 Week": "day",
    "1 Month": "week",
    "1 Year": "month",
  };

  const statCards = [
    {
      label: "Total Inflow",
      value: currentStatData.inflow,
      iconSrc: assets.metricUpGreenIcon,
      iconAlt: "Inflow Icon",
      metric: currentStatData.inflowMetric,
      textColor: "#4545FE",
    },
    {
      label: "MRR",
      value: currentStatData.mrr,
      iconSrc: assets.metricUpGreenIcon,
      iconAlt: "MRR Icon",
      metric: currentStatData.mrrMetric,
      textColor: "#12B76A",
    },
    {
      label: "Commission Revenue",
      value: currentStatData.commission,
      iconSrc: assets.metricNeutralGreenIcon,
      iconAlt: "Commission Icon",
      metric: currentStatData.commissionMetric,
      textColor: "#14B8A6",
    },
    {
      label: "GMV",
      value: currentStatData.gmv,
      iconSrc: assets.metricDownRedIcon,
      iconAlt: "GMV Icon",
      metric: currentStatData.gmvMetric,
      textColor: "#F04438",
    },
  ];

  const overText =
    activeTab === "1 Week"
      ? "Showing overview based on last 7 days"
      : activeTab === "1 Month"
      ? "Showing overview based on last 30 days"
      : "Showing overview based on last 12 months";

  return (
    <div className="col-span-2 bg-white rounded-2xl shadow">
      {/* Header section with title and view transactions button */}
      <div className="flex items-center justify-between mb-4 p-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
          <span className="text-[#606060] text-[0.75rem]">{overText}</span>
        </div>
        <button className="font-medium text-[0.75rem] border border-[#d6d6d6] text-[#191919] px-7 py-3 rounded-3xl">
          View Transactions
        </button>
      </div>

      {/* Tabs for selecting different time periods */}
      <Tabs
        activeTab={activeTab}
        onTabChange={(tab: string) => setActiveTab(tab as TabKey)}
      />

      {/* Main content: chart + stat cards */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Sales chart */}
        <div className="col-span-1 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Icon
              src={assets.drawerLeftIcon}
              alt="Side Icon"
              size={18}
              className="cursor-pointer opacity-50"
            />
          </div>
          <SalesChart data={currentChartData} xKey={xKeyMap[activeTab]} />
        </div>

        {/* Stat cards section */}
        <div className="relative grid grid-cols-2 gap-4 shadow-[-6px_0_6px_-4px_rgba(0,0,0,0.12)] pl-10 py-2">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Icon
              src={assets.drawerRightIcon}
              alt="Side Icon"
              size={18}
              className="cursor-pointer"
            />
          </div>

          {statCards.map((card) => (
            <StatCard key={card.label} {...card} iconSize={14} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewCard;
