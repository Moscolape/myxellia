import { render, screen } from "@testing-library/react";
import SalesChart from "./SalesChart";
import { describe, expect, it, vi } from "vitest";
import React from "react";

// Define proper prop types for mocked Recharts components
interface ContainerProps {
  children: React.ReactNode;
}
interface AxisProps {
  dataKey: string;
}
interface BarProps {
  dataKey: string;
}

// Mock Recharts components
vi.mock("recharts", async () => {
  const actual = await vi.importActual<typeof import("recharts")>("recharts");
  return {
    ...actual,
    ResponsiveContainer: ({ children }: ContainerProps) => <div>{children}</div>,
    BarChart: ({ children }: ContainerProps) => <div>{children}</div>,
    XAxis: ({ dataKey }: AxisProps) => <div>XAxis-{dataKey}</div>,
    YAxis: () => <div>YAxis</div>,
    Tooltip: () => <div>Tooltip</div>,
    Bar: ({ dataKey }: BarProps) => <div>Bar-{dataKey}</div>,
  };
});

const mockData = [
  { day: "Mon", inflow: 1000000, revenue: 500000, gmv: 200000 },
  { day: "Tue", inflow: 2000000, revenue: 1500000, gmv: 500000 },
];

describe("SalesChart", () => {
  it("renders without crashing and shows correct axis", () => {
    render(<SalesChart data={mockData} xKey="day" />);
    expect(screen.getByText("XAxis-day")).toBeInTheDocument();
    expect(screen.getByText("YAxis")).toBeInTheDocument();
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  });

  it("renders bars for inflow, revenue, and gmv", () => {
    render(<SalesChart data={mockData} xKey="day" />);
    expect(screen.getByText("Bar-inflow")).toBeInTheDocument();
    expect(screen.getByText("Bar-revenue")).toBeInTheDocument();
    expect(screen.getByText("Bar-gmv")).toBeInTheDocument();
  });
});
