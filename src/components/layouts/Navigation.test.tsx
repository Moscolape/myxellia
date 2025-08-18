import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { describe, expect, it, vi } from "vitest";

vi.mock("../ui/NavLinks", () => {
  return {
    default: (props: { label: string }) => <div>{props.label}</div>,
  };
});

vi.mock("../ui/SearchBar", () => {
  return {
    default: (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} />,
  };
});

describe("Navigation", () => {
  it("renders all navigation links", () => {
    render(<Navigation />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Listings")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Request")).toBeInTheDocument();
    expect(screen.getByText("Applications")).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<Navigation />);
    const searchInput = screen.getByPlaceholderText(/Search listings, users here/i);
    expect(searchInput).toBeInTheDocument();
  });
});
