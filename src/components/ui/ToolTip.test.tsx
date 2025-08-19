import { render, screen } from "@testing-library/react";
import Tooltip from "./ToolTip";
import { describe, expect, it } from "vitest";


describe("Tooltip", () => {
  it("does not render when isVisible is false", () => {
    render(<Tooltip text="Hello" isVisible={false} />);
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
  });

  it("renders text when isVisible is true", () => {
    render(<Tooltip text="Hello" isVisible={true} />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
