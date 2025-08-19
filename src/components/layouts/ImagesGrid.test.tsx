import { render, screen } from "@testing-library/react";
import ImagesGrid from "./ImagesGrid";
import { expect, vi, describe, it } from "vitest";


vi.mock("../ui/ImageSlider", () => ({ default: ({ title }: { title: string }) => <div>{title}</div> }));

vi.mock("../../data/sliderData", () => ({
  sliderData: [
    { title: "Slider 1", text: "Text 1", images: ["img1.jpg"] },
    { title: "Slider 2", text: "Text 2", images: ["img2.jpg"] },
  ],
}));

describe("ImagesGrid", () => {
  it("renders all sliders from sliderData", () => {
    render(<ImagesGrid />);
    expect(screen.getByText("Slider 1")).toBeInTheDocument();
    expect(screen.getByText("Slider 2")).toBeInTheDocument();
  });
});
