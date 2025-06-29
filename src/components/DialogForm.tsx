import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import {
  useForm,
  type FieldError,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import FormTextField from "./FormTextField";
import { useEffect } from "react";

interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  rules?: RegisterOptions;
}

interface DialogFormProps<T extends FieldValues> {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void;
  title: string;
  fields: FieldConfig[];
}

const DialogForm = <T extends FieldValues>({
  open,
  onClose,
  onSubmit,
  title,
  fields,
}: DialogFormProps<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>();

  const handleFormSubmit = (data: T) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const getFieldError = (fieldName: string) => {
    const err = errors[fieldName];
    return err && "message" in err ? (err as FieldError) : undefined;
  };

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            {fields.map((field) => (
              <FormTextField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type || "text"}
                control={control}
                error={getFieldError(field.name)}
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogForm;
