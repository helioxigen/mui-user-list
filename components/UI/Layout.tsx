import { Box, Container } from "@mui/system";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container sx={{ mb: 15 }}>
      <Box sx={{ maxWidth: 450, margin: "0 auto" }}>{children}</Box>
    </Container>
  );
};
