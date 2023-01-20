import { FC } from "react";
import { TextField } from "@mui/material";

interface IProps {
  type: string;
  label: string;
  register: any;
  error: string | undefined;
}

const FormField: FC<IProps> = ({ type, label, register, error }) => {
  return (
    <>
      <TextField type={type} label={label} {...register} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default FormField;
