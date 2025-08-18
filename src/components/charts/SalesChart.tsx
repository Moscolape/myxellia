import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", inflow: 40000000, revenue: 54000000, gmv: 24000000 },
  { month: "Feb", inflow: 60000000, revenue: 43980000, gmv: 22100000 },
  { month: "Mar", inflow: 20000000, revenue: 88000000, gmv: 22900000 },
  { month: "Apr", inflow: 27800000, revenue: 69080000, gmv: 20000000 },
  { month: "May", inflow: 58900000, revenue: 28000000, gmv: 91810000 },
  { month: "Jun", inflow: 63900000, revenue: 58000000, gmv: 25000000 },
  { month: "Jul", inflow: 74900000, revenue: 13000000, gmv: 21000000 },
  { month: "Aug", inflow: 12000000, revenue: 71000000, gmv: 28000000 },
  { month: "Sep", inflow: 37000000, revenue: 55000000, gmv: 30000000 },
];

const SalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} barGap={3}>
        <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#6b7280" }} />

        <YAxis
          domain={[0, 100000000]}
          ticks={[
            0, 10000000, 20000000, 30000000, 40000000,
            50000000, 60000000, 70000000, 80000000,
            90000000, 100000000,
          ]}
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