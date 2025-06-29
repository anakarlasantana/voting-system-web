import { TextField } from "@mui/material";
import { Controller, type Control, type FieldError } from "react-hook-form";

interface FormTextFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue?: string;
  type?: string;
  error?: FieldError;
}

const FormTextField = ({
  name,
  label,
  control,
  defaultValue = "",
  type = "text",
  error,
}: FormTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default FormTextField;
