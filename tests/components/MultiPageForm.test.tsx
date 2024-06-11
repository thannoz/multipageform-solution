import React from "react";
import { render } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

import MultiPageForm from "../../components/MultiPageForm";

describe("MultiPageForm component", () => {
  it("should render without crashing", () => {
    render(<MultiPageForm />);
  });

  it.skip("renders without crashing", () => {
    const { getByTestId } = render(<MultiPageForm />);
    const personalInfoComponent = getByTestId("personal-info-component");

    expect(personalInfoComponent).toBeInTheDocument();
  });
});
