import { Grid, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, aside }) => {
  return (
    <Container sx={{ mb: 15 }}>
      {/* <Grid container spacing={3}> */}
      {/* <Grid item xs={4} /> */}
      {/* <Grid item xs={4}> */}
      <Box sx={{ maxWidth: 480, margin: "0 auto" }}>{children}</Box>
      {/* </Grid> */}

      {/* </Grid> */}
    </Container>
  );
};
