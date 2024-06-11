import React from "react";

type StepButtonsProps = {
  prev: () => void;
  next: () => Promise<void>;
  currentStep: number;
  totalSteps: number;
};

const StepButtons: React.FC<StepButtonsProps> = ({
  prev,
  next,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="mt-6 flex w-full justify-between">
      <button
        type="button"
        onClick={prev}
        disabled={currentStep === 0}
        className="rounded bg-gray-900 px-4 py-2 text-white disabled:opacity-50"
        data-testid="prev-button"
      >
        &larr; Previous
      </button>
      <button
        type="button"
        onClick={next}
        disabled={currentStep === totalSteps - 1}
        className="rounded bg-gray-900 px-4 py-2 text-white disabled:opacity-50"
        data-testid="next-button"
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default StepButtons;
