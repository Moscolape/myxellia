import React from "react";
import { render, screen } from "@testing-library/react";
import UsersOverviewCard from "./UsersOverview";
import { describe, expect, vi, it } from "vitest";


type OverviewCardProps = {
  title: string;
  children: React.ReactNode;
};

type OverviewMetricProps = {
  label: string;
  value: string | number;
};


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

describe("UsersOverviewCard", () => {
  it("renders correctly with metrics", () => {
    render(<UsersOverviewCard />);

    expect(screen.getByText("Users Overview")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("20.7k")).toBeInTheDocument();
    expect(screen.getByText("Riders")).toBeInTheDocument();
    expect(screen.getByText("8.5k")).toBeInTheDocument();
    expect(screen.getByText("Subscribers")).toBeInTheDocument();
    expect(screen.getByText("7.5k")).toBeInTheDocument();
  });
});
