"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormDataSchema } from "@/lib/schema";
import ProgressIndicator from "./ProgressIndicator";

import { Steps } from "@/lib/data";

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

  const processForm: SubmitHandler<Inputs> = (data) => {
    setFormData(data);
    console.log(data);
  };

  type FieldName = keyof Inputs;

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

          {/* SalaryIndication */}

          {/* Complete */}
        </form>

        {/* Next and Prev buttons */}
      </div>
    </section>
  );
}
