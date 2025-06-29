import { Box, CssBaseline } from "@mui/material";
import type { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
        bgcolor: "background.default",
      }}
    >
      <CssBaseline />

      {children}
    </Box>
  );
};

export default MainContainer;
