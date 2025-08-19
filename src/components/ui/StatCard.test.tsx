import { render, screen } from "@testing-library/react";
import StatCard from "./StatCard";
import { describe, expect, vi, it } from "vitest";

vi.mock("../ui/Icons", () => ({ default: ({ alt }: { alt: string }) => <div>{alt}</div> }));

describe("StatCard", () => {
  it("renders label, value, metric and icon", () => {
    // Verify that all props (label, value, metric, icon) are displayed correctly
    render(
      <StatCard
        label="Profit"
        textColor="red"
        value={5000}
        metric={10}
        iconSrc="icon.png"
        iconAlt="Profit Icon"
        iconSize={24}
      />
    );

    expect(screen.getByText("₦5000")).toBeInTheDocument();
    expect(screen.getByText("Profit")).toBeInTheDocument();
    expect(screen.getByText("Profit Icon")).toBeInTheDocument(); // mocked icon
    expect(screen.getByText("10%")).toBeInTheDocument();
  });
});
