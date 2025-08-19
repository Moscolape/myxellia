import { render, screen, act } from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import { describe, it, beforeEach, afterEach, vi, expect } from "vitest";

describe("ImageSlider", () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  const title = "Test Title";
  const text = "Test Text";

  beforeEach(() => {
    vi.useFakeTimers(); // Use fake timers to control slideshow interval
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  // Test that the first image is visible initially
  it("renders the first image initially", () => {
    render(<ImageSlider title={title} text={text} images={images} interval={1000} />);
    const imgs = screen.getAllByAltText(title);
    expect(imgs[0].parentElement).toHaveClass("opacity-100");
    expect(imgs[1].parentElement).toHaveClass("opacity-0");
    expect(imgs[2].parentElement).toHaveClass("opacity-0");
  });

  // Test automatic cycling of images using the interval
  it("cycles images automatically with interval", () => {
    render(<ImageSlider title={title} text={text} images={images} interval={1000} />);
    const imgs = screen.getAllByAltText(title);

    act(() => {
      vi.advanceTimersByTime(1000); // Move to second image
    });
    expect(imgs[0].parentElement).toHaveClass("opacity-0");
    expect(imgs[1].parentElement).toHaveClass("opacity-100");

    act(() => {
      vi.advanceTimersByTime(1000); // Move to third image
    });
    expect(imgs[1].parentElement).toHaveClass("opacity-0");
    expect(imgs[2].parentElement).toHaveClass("opacity-100");
  });
});