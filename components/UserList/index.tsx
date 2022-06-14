import { User } from "@api";
import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { stringAvatar } from "@utils";
import React from "react";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Paper elevation={3}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {users.map((user, idx) => (
          <React.Fragment key={user.id}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar {...stringAvatar(user.name)} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {user.company.name}
                      </Typography>
                    </>
                  }
                />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};
