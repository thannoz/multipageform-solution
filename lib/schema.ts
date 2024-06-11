import { z } from "zod";

export const FormDataSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  salary: z.string().min(1, "Salary is required"),
});

export type Inputs = z.infer<typeof FormDataSchema>;
