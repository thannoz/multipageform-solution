import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

import Complete from "../../components/Complete";
import { Inputs } from "@/lib/schema";

describe("Complete Component", () => {
  it("should render static text correctly", () => {
    render(<Complete formData={null} />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("Complete");
    expect(
      screen.getByText("Thank you for your submission.")
    ).toBeInTheDocument();
  });

  it("should render formData correctly", () => {
    const formData: Inputs = {
      fullname: "Konzo Maiza",
      email: "konzo@gmail.com",
      phone: "123456789",
      salary: "2000 - 2500 EUR",
    };
    const { getByText } = render(<Complete formData={formData} />);

    expect(getByText(/Konzo Maiza/)).toBeInTheDocument();
    expect(getByText(/konzo@gmail.com/)).toBeInTheDocument();
    expect(getByText(/123456789/)).toBeInTheDocument();
    expect(getByText(/2000 - 2500 EUR/)).toBeInTheDocument();
  });
});
