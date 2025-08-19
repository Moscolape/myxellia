import { render, screen } from "@testing-library/react";
import OverviewMetric from "./OverviewMetric";
import { expect, describe, it } from "vitest";

describe("OverviewMetric", () => {
  it("renders label and value correctly", () => {
    render(<OverviewMetric label="Revenue" value={1000} />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
  });
});
