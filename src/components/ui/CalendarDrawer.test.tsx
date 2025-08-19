import { render, screen, fireEvent } from "@testing-library/react";
import CalendarDrawer from "./CalendarDrawer";
import { describe, expect, it, vi } from "vitest";

// Mock the react-calendar component for isolated testing
vi.mock("react-calendar", () => ({
  default: () => <div data-testid="calendar" />,
}));

describe("CalendarDrawer", () => {
  // Test that CalendarDrawer is not rendered when isOpen is false
  it("does not render when isOpen is false", () => {
    const onClose = vi.fn();
    const { container } = render(<CalendarDrawer isOpen={false} onClose={onClose} />);
    expect(container).toBeEmptyDOMElement();
  });

  // Test that CalendarDrawer renders properly when isOpen is true
  it("renders correctly when isOpen is true", () => {
    const onClose = vi.fn();
    render(<CalendarDrawer isOpen={true} onClose={onClose} />);
    expect(screen.getByText("Calendar")).toBeInTheDocument();
    expect(screen.getByTestId("calendar")).toBeInTheDocument();
  });

  // Test that clicking the close button triggers the onClose callback
  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<CalendarDrawer isOpen={true} onClose={onClose} />);
    fireEvent.click(screen.getByTitle("close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});