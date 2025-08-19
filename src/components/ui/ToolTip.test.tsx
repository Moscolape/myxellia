import { render, screen } from "@testing-library/react";
import Tooltip from "./ToolTip";
import { describe, expect, it } from "vitest";


describe("Tooltip", () => {
  it("does not render when isVisible is false", () => {
    // Tooltip should not render if isVisible is false
    render(<Tooltip text="Budgeting" isVisible={false} />);
    expect(screen.queryByText("Budgeting")).not.toBeInTheDocument();
  });

  it("renders text when isVisible is true", () => {
    // Tooltip should render when isVisible is true
    render(<Tooltip text="Calendar" isVisible={true} />);
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });
});