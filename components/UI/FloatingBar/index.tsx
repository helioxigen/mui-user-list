import { AppBar, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ElevationScroll } from "./ElevationScroll";

interface FloatingBarProps {
  children: React.ReactNode;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ children }) => {
  return (
    // <ElevationScroll elevations={[5, 7]}>
    <AppBar
      position="sticky"
      sx={{ mb: 4, mt: 8 }}
      square={false}
      elevation={6}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
    // </ElevationScroll>
  );
};
