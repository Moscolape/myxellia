import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, expect, vi, it } from "vitest";

// Mock HeaderIcons component to isolate Header test
vi.mock("../ui/HeaderIcons", () => ({ default: () => <div>HeaderIcons</div> }));

describe("Header", () => {
  // Test that the header renders logo, icons, and user initials
  it("renders logo, header icons, and user initials", () => {
    render(<Header />);
    expect(screen.getByAltText("Myxellia Logo")).toBeInTheDocument();
    expect(screen.getByText("HeaderIcons")).toBeInTheDocument();
    expect(screen.getByText("D")).toBeInTheDocument();
  });
});