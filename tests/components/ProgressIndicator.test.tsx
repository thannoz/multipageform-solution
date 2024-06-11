import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

import ProgressIndicator from "../../components/ProgressIndicator";
import { Steps } from "../../lib/data";

describe("ProgressIndicator component", () => {
  it("should render the number of step correctly", () => {
    const { getAllByRole } = render(
      <ProgressIndicator steps={Steps} currentStep={0} />
    );
    const progressSteps = getAllByRole("listitem");
    expect(progressSteps).toHaveLength(Steps.length);
  });

  it("should highlight current step", () => {
    expect(screen.getByText("Salary information")).toBeInTheDocument();
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByText("Completion")).toBeInTheDocument();
  });
});
