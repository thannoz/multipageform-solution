import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { it, expect, describe, vitest } from "vitest";
import { FieldErrors } from "react-hook-form";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import { SalaryOptions } from "../../lib/data";
import SalaryIndication from "../../components/SalaryIndication";
import { Inputs } from "@/lib/schema";

describe("SalaryIndication component", () => {
  const mockRegister = vi.fn();
  it("should render correctly", () => {
    const { getByText, getAllByRole } = render(
      <SalaryIndication register={mockRegister} errors={{}} delta={0} />
    );

    expect(getByText("Salary Indication")).toBeInTheDocument();

    const radioButtons = getAllByRole("radio");
    expect(radioButtons).toHaveLength(SalaryOptions.length);

    SalaryOptions.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });

  it("should select a salary option", () => {
    const { getAllByRole } = render(
      <SalaryIndication register={mockRegister} errors={{}} delta={0} />
    );

    const salaryOption = getAllByRole("radio")[0];
    fireEvent.click(salaryOption);

    expect(salaryOption).toBeChecked();
  });

  it("should display error message correctly", () => {
    const mockErrors: FieldErrors<Inputs> = {
      salary: {
        message: "Salary is required",
        type: "required",
      },
    };

    const { getByText } = render(
      <SalaryIndication register={mockRegister} errors={mockErrors} delta={0} />
    );

    expect(getByText("Salary is required")).toBeInTheDocument();
  });
});
