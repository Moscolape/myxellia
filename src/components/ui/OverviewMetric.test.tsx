import { render, screen } from "@testing-library/react";
import OverviewMetric from "./OverviewMetric";
import { expect, describe, it } from "vitest";

describe("OverviewMetric", () => {
  it("renders label and value correctly", () => {
    // Test that the component renders both the label and value props
    render(<OverviewMetric label="Revenue" value={1000} />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
  });
});
