import { render, screen } from "@testing-library/react";
import NavLink from "./NavLinks";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("NavLink", () => {
  it("renders active link correctly", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <NavLink src="icon.png" alt="icon" label="Home" to="/home" />
      </MemoryRouter>
    );

    const link = screen.getByTitle("Home");
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("text-black font-semibold");
  });

  it("renders disabled link correctly", () => {
    render(<NavLink src="icon.png" alt="icon" label="Disabled" disabled={true} />);

    const div = screen.getByTitle("Disabled");
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass("text-gray-400 cursor-default pointer-events-none");
  });
});
