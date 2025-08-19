import { render, screen } from "@testing-library/react";
import Dashboard from "./dashboard";
import { describe, expect, it, vi } from "vitest";

vi.mock("../components/layouts/Header", () => ({ default: () => <div>Header</div> }));
vi.mock("../components/layouts/Navigation", () => ({ default: () => <div>Navigation</div> }));
vi.mock("../components/layouts/Images", () => ({ default: () => <div>ImagesGrid</div> }));
vi.mock("../components/layouts/Overview", () => ({ default: () => <div>Overviews</div> }));

describe("Dashboard", () => {
  it("renders header, navigation, overviews, and images grid", () => {
    render(<Dashboard />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Navigation")).toBeInTheDocument();
    expect(screen.getByText("Welcome, Ahmed")).toBeInTheDocument();
  });
});
