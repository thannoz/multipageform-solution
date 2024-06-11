"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormDataSchema } from "@/lib/schema";
import ProgressIndicator from "./ProgressIndicator";

import { Steps } from "@/lib/data";
import PersonalInformation from "./PersonalInfo";
import StepButtons from "./StepButtons";
import SalaryIndication from "./SalaryIndication";

type Inputs = z.infer<typeof FormDataSchema>;

export default function MultiPageForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const [formData, setFormData] = useState<Inputs | null>(null);

  const processForm: SubmitHandler<Inputs> = (data) => {};

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = Steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < Steps.length - 1) {
      if (currentStep === Steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-200 font-sans">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Buena</h1>
        <p className="text-gray-600">Become a member in three easy steps</p>
      </div>

      {/* steps */}
      <div className="mb-6 flex w-full max-w-lg flex-col items-center">
        <ProgressIndicator steps={Steps} currentStep={currentStep} />
      </div>

      {/* Form */}
      <div className="mt-5 w-full max-w-lg rounded-lg bg-gray-300 p-8 shadow-lg">
        <form className="mt-6 py-6" onSubmit={handleSubmit(processForm)}>
          {/* PersonalInfomation */}
          {currentStep === 0 && (
            <PersonalInformation
              register={register}
              errors={errors}
              delta={delta}
            />
          )}
          {/* SalaryIndication */}
          {currentStep === 1 && (
            <SalaryIndication
              register={register}
              errors={errors}
              delta={delta}
            />
          )}

          {/* Complete */}
        </form>

        {/* Next and Prev buttons */}
        <StepButtons
          prev={prev}
          next={next}
          currentStep={currentStep}
          totalSteps={Steps.length}
        />
      </div>
    </section>
  );
}
