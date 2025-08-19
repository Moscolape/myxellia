import { render, screen, fireEvent } from "@testing-library/react";
import HeaderIcons from "./HeaderIcons";
import { describe, expect, it, vi } from "vitest";

// Mock child components to isolate HeaderIcons behavior
vi.mock("../modals/BudgetingCard", () => ({
  default: () => <div>Mock BudgetingCard</div>
}));

vi.mock("../ModalOverlay", () => ({
  default: ({ children, isOpen, onClose }: React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>) =>
    isOpen ? <div>{children}<button onClick={onClose}>Close Modal</button></div> : null
}));

vi.mock("./CalendarDrawer", () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? <div>Mock Calendar<button onClick={onClose}>Close Calendar</button></div> : null
}));


describe("HeaderIcons", () => {
  // Test tooltip visibility when hovering over the calculator icon
  it("shows tooltip on hover for calculator", () => {
    render(<HeaderIcons />);
    const calculatorIcon = screen.getByAltText("Calculator Icon");
    fireEvent.mouseEnter(calculatorIcon.parentElement!);
    expect(screen.getByText(/Budgeting/i)).toBeVisible();
    fireEvent.mouseLeave(calculatorIcon.parentElement!);
    expect(screen.queryByText(/Budgeting/i)).toBeNull();
  });

  // Test opening the budget modal when calculator icon is clicked
  it("opens budget modal when calculator is clicked", () => {
    render(<HeaderIcons />);
    const calculatorIcon = screen.getByAltText("Calculator Icon");
    fireEvent.click(calculatorIcon);
    expect(screen.getByText(/Mock BudgetingCard/i)).toBeInTheDocument();
  });

  // Test opening and closing of the calendar drawer
  it("opens and closes calendar drawer", () => {
    render(<HeaderIcons />);
    const calendarIcon = screen.getByAltText("Calendar Icon");
    fireEvent.click(calendarIcon);
    expect(screen.getByText(/Mock Calendar/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close Calendar"));
    expect(screen.queryByText(/Mock Calendar/i)).toBeNull();
  });
});