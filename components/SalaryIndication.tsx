import React, { FC } from "react";
import { motion } from "framer-motion";
import { AddressFormProps } from "@/lib/types";
import { SalaryOptions } from "@/lib/data";

const SalaryIndication: FC<AddressFormProps> = ({
  register,
  errors,
  delta,
}) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <label className="mb-2 block text-gray-900">Salary Indication</label>
      {/* array of salaries */}
      <div className="mt-2 space-y-4">
        {SalaryOptions.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              {...register("salary")}
              value={option.value}
              className="form-radio text-blue-600"
            />
            <span className="ml-2 text-gray-900">{option.label}</span>
          </label>
        ))}
        {errors.salary?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.salary.message}</p>
        )}
      </div>
    </motion.div>
  );
};

export default SalaryIndication;
