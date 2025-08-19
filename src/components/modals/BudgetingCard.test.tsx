import { render, screen, fireEvent } from "@testing-library/react";
import BudgetingCard from "./BudgetingCard";
import { describe, expect, it } from "vitest";

describe("BudgetingCard", () => {
  // Test that the main heading and button are rendered
  it("renders correctly with main heading and button", () => {
    render(<BudgetingCard />);
    expect(screen.getByText(/Set up annual budgets/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Create Budget/i })).toBeInTheDocument();
  });

  // Test that all 3 feature sections are rendered
  it("renders all 3 feature sections", () => {
    render(<BudgetingCard />);
    expect(screen.getByText(/Set up annual budgets/i)).toBeInTheDocument();
    expect(screen.getByText(/Track actuals vs budget/i)).toBeInTheDocument();
    expect(screen.getByText(/Adjust figures and forecast/i)).toBeInTheDocument();
  });

  // Test that the Create Budget button is clickable
  it("button is clickable", () => {
    const { getByRole } = render(<BudgetingCard />);
    const button = getByRole("button", { name: /Create Budget/i });
    fireEvent.click(button);
    expect(button).toBeEnabled();
  });
});