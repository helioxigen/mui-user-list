import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import * as icons from "@mui/icons-material";

interface EntryProps {
  icon: string;
  children: React.ReactNode;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Entry: React.FC<EntryProps> = ({ icon, children }) => {
  const Icon = icons[capitalizeFirstLetter(icon)];

  console.log(icon.toLocaleUpperCase(), Icon);

  return (
    <ListItem alignItems="flex-start">
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="body2">{children}</Typography>}
      />
    </ListItem>
  );
};
