import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";
import { describe, expect, vi, it } from "vitest";


describe("Tabs", () => {
  it("renders all tabs and highlights active", () => {
    // Render tabs and test that clicking a tab calls the onTabChange handler with correct value
    const handleTabChange = vi.fn();
    render(<Tabs activeTab="1 Week" onTabChange={handleTabChange} />);
    expect(screen.getByText("1 Week")).toBeInTheDocument();
    expect(screen.getByText("1 Month")).toBeInTheDocument();
    expect(screen.getByText("1 Year")).toBeInTheDocument();

    fireEvent.click(screen.getByText("1 Month"));
    expect(handleTabChange).toHaveBeenCalledWith("1 Month");
  });
});
