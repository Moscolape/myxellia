import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define the type for each data point in the chart
interface SalesChartData {
  inflow: number;
  revenue: number;
  gmv: number;
  [key: string]: string | number;
}

// Props for the SalesChart component
interface SalesChartProps {
  data: SalesChartData[];
  xKey: string;
}

/**
 * SalesChart Component
 * 
 * Renders a responsive bar chart showing inflow, revenue, and GMV over time.
 */
const SalesChart: React.FC<SalesChartProps> = ({ data, xKey }) => {
  return (
    // Responsive container ensures chart scales to parent width
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} barGap={3}>
        <XAxis 
          dataKey={xKey}
          tick={{ fontSize: 10, fill: "#6b7280" }}
        />

        <YAxis
          domain={[0, "dataMax"]}
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickFormatter={(value) => `${value / 1000000}M`}
        />

        {/* Tooltip shows values when hovering over bars */}
        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.05)" }}
          formatter={(value: number) =>
            `₦${(value / 1000000).toFixed(1)}M` // Format tooltip in millions with ₦
          }
        />

        {/* Bars for inflow, revenue, and GMV */}
        <Bar dataKey="inflow" fill="#4545FE" barSize={5} />
        <Bar dataKey="revenue" fill="#12B76A" barSize={5} />
        <Bar dataKey="gmv" fill="#F04438" barSize={5} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;