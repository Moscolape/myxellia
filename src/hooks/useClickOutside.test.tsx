import { render, fireEvent } from "@testing-library/react";
import { describe, expect, vi, it } from "vitest";
import React, { useRef } from "react";
import useClickOutside from "./useClickOutside";

describe("useClickOutside hook", () => {
  it("calls handler when clicking outside", () => {
    // Tests that clicking outside the referenced element triggers the handler
    const handler = vi.fn();
    const TestComponent: React.FC = () => {
      const ref = useRef<HTMLDivElement>(null);
      useClickOutside(ref, handler);
      return <div ref={ref}>Inside</div>;
    };

    const { getByText } = render(<TestComponent />);
    const insideDiv = getByText("Inside");

    fireEvent.mouseDown(document.body);
    expect(handler).toHaveBeenCalledTimes(1);

    handler.mockReset();
    fireEvent.mouseDown(insideDiv);
    expect(handler).not.toHaveBeenCalled();
  });
});
