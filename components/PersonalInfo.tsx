import React, { FC } from "react";
import { motion } from "framer-motion";
import { AddressFormProps } from "@/lib/types";

const PersonalInformation: FC<AddressFormProps> = ({
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
      <label htmlFor="fullname" className="mb-2 block text-gray-900">
        Full name
      </label>
      <div className="mt-2">
        <input
          type="text"
          id="fullname"
          {...register("fullname")}
          autoComplete="given-name"
          className="mb-4 w-full rounded border border-gray-300 p-2"
        />
        {errors.fullname?.message && (
          <p data-testid="fullname-error" className="mt-2 text-sm text-red-400">
            {errors.fullname.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            {...register("email")}
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
          {errors.email?.message && (
            <p data-testid="email-error" className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone number
        </label>
        <div className="mt-2">
          <input
            id="phone"
            type="text"
            {...register("phone")}
            autoComplete="phone"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
          {errors.phone?.message && (
            <p data-testid="phone-error" className="mt-2 text-sm text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInformation;
