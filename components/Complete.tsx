import { Inputs } from "@/lib/schema";
import React from "react";

interface CompleteProps {
  formData: Inputs | null;
}

const Complete: React.FC<CompleteProps> = ({ formData }) => {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Complete
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Thank you for your submission.
      </p>
      <div>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Complete;
