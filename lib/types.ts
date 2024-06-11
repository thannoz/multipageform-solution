import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Inputs } from "./schema";

export interface Step {
  id: string;
  name: string;
  fields: string[];
}

export interface AddressFormProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  delta: number;
}
