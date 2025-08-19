import { render, screen } from "@testing-library/react";
import Overviews from "./Overviews";
import { describe, expect, it, vi } from "vitest";

// Mock the individual overview cards
vi.mock("../overviews/SalesOverview", () => ({ default: () => <div>SalesOverviewCard</div> }));
vi.mock("../overviews/ListingsOverview", () => ({ default: () => <div>ListingsOverviewCard</div> }));
vi.mock("../overviews/UsersOverview", () => ({ default: () => <div>UsersOverviewCard</div> }));

describe("Overviews", () => {
  // Test that all overview cards render
  it("renders all overview cards", () => {
    render(<Overviews />);
    expect(screen.getByText("SalesOverviewCard")).toBeInTheDocument();
    expect(screen.getByText("ListingsOverviewCard")).toBeInTheDocument();
    expect(screen.getByText("UsersOverviewCard")).toBeInTheDocument();
  });
});