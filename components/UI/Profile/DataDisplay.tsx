import { Stack, Box, Typography } from "@mui/material";
import React from "react";

interface DataDisplayProps {
  data: { [K: string]: string | number | boolean };
}

export const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  return (
    <Box>
      {Object.entries(data).map(([key, value]) => (
        <Stack key={key} justifyContent="space-between" direction="row">
          <Typography textTransform="uppercase" color="grey" variant="overline">
            {key}
          </Typography>
          <Typography>{value}</Typography>
        </Stack>
      ))}
    </Box>
  );
};
