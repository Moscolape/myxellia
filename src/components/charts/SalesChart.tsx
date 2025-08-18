import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../data/chartData";


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