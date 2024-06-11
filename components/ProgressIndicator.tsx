import React, { FC } from "react";
import { Step } from "../lib/types";

interface StepNavigationProps {
  steps: Step[];
  currentStep: number;
}

const ProgressIndicator: FC<StepNavigationProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex w-full items-center space-x-2 rounded-lg border border-gray-200 bg-white p-2 text-center text-sm font-medium text-gray-500 shadow-sm">
      {steps.map((step, index) => (
        <li key={step.name} className="md:flex-1">
          {currentStep > index ? (
            <div className="group flex w-full flex-col border-l-4 border-gray-900 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-gray-900 transition-colors ">
                {step.id}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
            </div>
          ) : currentStep === index ? (
            <div
              className="flex w-full flex-col border-l-4 border-gray-900 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              aria-current="step"
            >
              <span className="text-sm font-medium text-gray-900">
                {step.id}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
            </div>
          ) : (
            <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-gray-500 transition-colors">
                {step.id}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default ProgressIndicator;
