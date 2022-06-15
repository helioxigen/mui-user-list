import { User } from "@api";
import { AvatarString } from "@components/UI/Profile";
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
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <Paper elevation={3}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <ListItem disablePadding>
              <Link scroll={false} href={`/contact/${user.id}`}>
                <ListItemButton
                  component="a"
                  selected={(id as string) == user.id}
                >
                  <ListItemAvatar>
                    <AvatarString name={user.name} />
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
              </Link>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};
