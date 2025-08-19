import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { describe, vi, it, expect } from "vitest";


vi.mock("./Icons", () => ({ default: ({ alt }: { alt: string }) => <div>{alt}</div> }));

describe("SearchBar", () => {
  it("renders input and icon correctly", () => {
    // Check that the placeholder input and mocked icon are rendered
    render(<SearchBar placeholder="Search here" />);
    expect(screen.getByPlaceholderText("Search here")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument(); // mocked icon
  });
});

