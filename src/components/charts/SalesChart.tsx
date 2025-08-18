import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SalesChartData {
  inflow: number;
  revenue: number;
  gmv: number;
  [key: string]: string | number;
}

interface SalesChartProps {
  data: SalesChartData[];
  xKey: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ data, xKey }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} barGap={3}>
        <XAxis dataKey={xKey} tick={{ fontSize: 10, fill: "#6b7280" }} />

        <YAxis
          domain={[0, "dataMax"]}
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickFormatter={(value) => `${value / 1000000}M`}
        />

        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.05)" }}
          formatter={(value: number) =>
            `₦${(value / 1000000).toFixed(1)}M`
          }
        />

        <Bar dataKey="inflow" fill="#4545FE" barSize={5} />
        <Bar dataKey="revenue" fill="#12B76A" barSize={5} />
        <Bar dataKey="gmv" fill="#F04438" barSize={5} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;