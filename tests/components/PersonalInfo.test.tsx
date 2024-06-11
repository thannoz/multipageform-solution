import React from "react";
import { render } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { useForm, FormProvider } from "react-hook-form";
import "@testing-library/jest-dom/vitest";

import PersonalInformation from "../../components/PersonalInfo";
import { Inputs } from "@/lib/schema";

// Helper component to provide useForm context
const PersonalInformationWrapper: React.FC<{ delta: number; errors: any }> = ({
  delta,
  errors,
}) => {
  const methods = useForm<Inputs>();
  return (
    <FormProvider {...methods}>
      <PersonalInformation
        register={methods.register}
        errors={errors}
        delta={delta}
      />
    </FormProvider>
  );
};

describe("PersonalInformation component", () => {
  it("should render without crashing", () => {
    const errors = {};

    const { getByLabelText } = render(
      <PersonalInformationWrapper errors={errors} delta={1} />
    );

    expect(getByLabelText("Full name")).toBeInTheDocument();
    expect(getByLabelText("Email address")).toBeInTheDocument();
    expect(getByLabelText("Phone number")).toBeInTheDocument();
  });

  it("renders all input fields", () => {
    const errors = {};
    const { getByLabelText } = render(
      <PersonalInformationWrapper delta={1} errors={errors} />
    );

    expect(getByLabelText("Full name")).toBeInTheDocument();
    expect(getByLabelText("Email address")).toBeInTheDocument();
    expect(getByLabelText("Phone number")).toBeInTheDocument();
  });

  it("displays error messages correctly", () => {
    const errors = {
      fullname: { message: "Full name is required", type: "required" },
      email: { message: "Email is not valid", type: "pattern" },
      phone: { message: "Phone number is required", type: "required" },
    };

    const { getByTestId } = render(
      <PersonalInformationWrapper delta={1} errors={errors} />
    );

    expect(getByTestId("fullname-error")).toHaveTextContent(
      "Full name is required"
    );
    expect(getByTestId("email-error")).toHaveTextContent("Email is not valid");
    expect(getByTestId("phone-error")).toHaveTextContent(
      "Phone number is required"
    );
  });
});
