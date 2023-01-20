import { FC } from "react";
import { TextField } from "@mui/material";

interface IProps {
  label: string;
  register: any;
  error: string | undefined;
}

const FormField: FC<IProps> = ({ label, register, error }) => {
  return (
    <>
      <TextField label={label} {...register} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default FormField;
