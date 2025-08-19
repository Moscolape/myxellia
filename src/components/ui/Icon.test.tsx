import { render, screen, fireEvent } from "@testing-library/react";
import Icon from "./Icons";
import { describe, expect, it, vi } from "vitest";

describe("Icon", () => {
  // Test that the icon renders with correct src and alt attributes
  it("renders correctly with src and alt", () => {
    render(<Icon src="icon.png" alt="Test Icon" />);
    const img = screen.getByAltText("Test Icon") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("icon.png");
  });

  // Test that the onClick handler is called when the icon is clicked
  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Icon src="icon.png" alt="Click Icon" onClick={handleClick} />);
    fireEvent.click(screen.getByAltText("Click Icon"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test that size and className props are applied correctly
  it("applies size and className correctly", () => {
    render(<Icon src="icon.png" alt="Styled Icon" size={32} className="custom-class" />);
    const img = screen.getByAltText("Styled Icon") as HTMLImageElement;
    expect(img.width).toBe(32);
    expect(img.className).toContain("custom-class");
  });
});