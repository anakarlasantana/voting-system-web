import { Stack, Button as MuiButton } from "@mui/material";
import type { ReactNode } from "react";

interface ActionButtonProps {
  show: boolean;
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}

const ActionButton = ({ show, label, icon, onClick }: ActionButtonProps) => {
  if (!show) return null;

  return (
    <Stack sx={{ width: "100%", maxWidth: "lg", mb: 2 }} alignItems="flex-end">
      <MuiButton variant="contained" onClick={onClick} endIcon={icon}>
        {label}
      </MuiButton>
    </Stack>
  );
};

export default ActionButton;
