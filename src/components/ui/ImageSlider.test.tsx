import { render, screen, act } from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import { describe, it, beforeEach, afterEach, vi, expect } from "vitest";

describe("ImageSlider", () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  const title = "Test Title";
  const text = "Test Text";

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders the first image initially", () => {
    render(<ImageSlider title={title} text={text} images={images} interval={1000} />);
    const imgs = screen.getAllByAltText(title);
    expect(imgs[0].parentElement).toHaveClass("opacity-100");
    expect(imgs[1].parentElement).toHaveClass("opacity-0");
    expect(imgs[2].parentElement).toHaveClass("opacity-0");
  });

  it("cycles images automatically with interval", () => {
    render(<ImageSlider title={title} text={text} images={images} interval={1000} />);
    const imgs = screen.getAllByAltText(title);

    // Advance to second image
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(imgs[0].parentElement).toHaveClass("opacity-0");
    expect(imgs[1].parentElement).toHaveClass("opacity-100");

    // Advance to third image
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(imgs[1].parentElement).toHaveClass("opacity-0");
    expect(imgs[2].parentElement).toHaveClass("opacity-100");
  });

});
