import { render, screen, fireEvent } from "@testing-library/react";
import SalesOverviewCard from "./SalesOverview";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock Tabs component
vi.mock("../ui/Tabs", () => ({
  default: (props: { activeTab: string; onTabChange: (tab: string) => void }) => (
    <div>
      <button onClick={() => props.onTabChange("1 Week")}>1 Week</button>
      <span>{props.activeTab}</span>
    </div>
  ),
}));

// Mock StatCard component
vi.mock("../ui/StatCard", () => ({
  default: (props: { label: string }) => <div>{props.label}</div>,
}));

// Mock SalesChart component
vi.mock("../charts/SalesChart", () => ({
  default: () => <div>Mock Chart</div>,
}));

// Mock Icons component
vi.mock("../ui/Icons", () => ({
  default: (props: { alt: string }) => <div>{props.alt}</div>,
}));

// Mock localStorage for tab persistence
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("SalesOverviewCard", () => {
  beforeEach(() => window.localStorage.clear());

  // Test main heading and description
  it("renders main heading and overText", () => {
    render(<SalesOverviewCard />);
    expect(screen.getByText(/Sales Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Showing overview based on last 12 months/i)).toBeInTheDocument();
  });

  // Test rendering of all stat cards
  it("renders all stat cards", () => {
    render(<SalesOverviewCard />);
    expect(screen.getByText("Total Inflow")).toBeInTheDocument();
    expect(screen.getByText("MRR")).toBeInTheDocument();
    expect(screen.getByText("Commission Revenue")).toBeInTheDocument();
    expect(screen.getByText("GMV")).toBeInTheDocument();
  });

  // Test tab change functionality and localStorage persistence
  it("changes active tab when button is clicked", () => {
    render(<SalesOverviewCard />);
    fireEvent.click(screen.getByText("1 Year"));
    expect(screen.getByText("1 Year")).toBeInTheDocument();
    expect(window.localStorage.getItem("salesOverviewTab")).toBe("1 Year");
  });

  // Test that chart component renders
  it("renders chart component", () => {
    render(<SalesOverviewCard />);
    expect(screen.getByText("Mock Chart")).toBeInTheDocument();
  });
});