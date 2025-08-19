import React from "react";
import { render, screen } from "@testing-library/react";
import ListingsOverviewCard from "./ListingsOverview";
import { describe, expect, vi, it } from "vitest";

type OverviewCardProps = {
  title: string;
  children: React.ReactNode;
};

type OverviewMetricProps = {
  label: string;
  value: string | number;
};

// Mock child components to isolate ListingsOverviewCard
vi.mock("../ui/OverviewCard", () => ({
  default: ({ title, children }: OverviewCardProps) => (
    <div data-testid="overview-card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  ),
}));

vi.mock("../ui/OverviewMetric", () => ({
  default: ({ label, value }: OverviewMetricProps) => (
    <div data-testid="overview-metric">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  ),
}));

describe("ListingsOverviewCard", () => {
  // Test that the card renders correctly with all metrics
  it("renders correctly with metrics", () => {
    render(<ListingsOverviewCard />);
    expect(screen.getByText("Listings Overview")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("1.8k")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();
    expect(screen.getByText("Archived")).toBeInTheDocument();
    expect(screen.getByText("1k")).toBeInTheDocument();
  });
});