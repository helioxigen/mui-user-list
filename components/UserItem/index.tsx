import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import { User } from "pages/api/users";
import React from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const UserItem: React.FC<{ user: User }> = ({ user }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={user.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {user.email}
            </Typography>
            {bull}
            {user.username}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
