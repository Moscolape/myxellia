import { render, screen } from "@testing-library/react";
import OverviewCard from "./OverviewCard";
import { describe, expect, it, vi } from "vitest";

// Mock the Icon component to isolate OverviewCard
vi.mock("./Icons", () => ({ default: ({ alt }: { alt: string }) => <div>{alt}</div> }));

describe("OverviewCard", () => {
  // Test rendering of title, children, and view all link
  it("renders title and children correctly", () => {
    render(
      <OverviewCard title="Card Title" iconUrl="icon.png">
        <div>Child Content</div>
      </OverviewCard>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Title icon")).toBeInTheDocument();
    expect(screen.getByText("Child Content")).toBeInTheDocument();
    expect(screen.getByText("View all")).toBeInTheDocument();
  });
});