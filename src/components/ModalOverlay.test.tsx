import { render, screen } from "@testing-library/react";
import ModalOverlay from "./ModalOverlay";
import { describe, expect, it, vi } from "vitest";
import useClickOutside from "../hooks/useClickOutside";

vi.mock("../hooks/useClickOutside", () => ({
  default: vi.fn(),
}));

describe("ModalOverlay", () => {
  it("does not render when isOpen is false", () => {
    // ModalOverlay should render nothing if isOpen is false
    const { container } = render(
      <ModalOverlay isOpen={false} onClose={vi.fn()}>
        <div>Modal Content</div>
      </ModalOverlay>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("renders children when isOpen is true", () => {
    // ModalOverlay renders children when open
    render(
      <ModalOverlay isOpen={true} onClose={vi.fn()}>
        <div>Modal Content</div>
      </ModalOverlay>
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("calls onClose when clicking outside", () => {
    // Test that clicking outside triggers onClose using mocked hook
    const onClose = vi.fn();
    (useClickOutside as unknown as ReturnType<typeof vi.fn>).mockImplementation(
      (_ref, handler) => handler()
    );

    render(
      <ModalOverlay isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </ModalOverlay>
    );

    expect(onClose).toHaveBeenCalled();
  });
});
