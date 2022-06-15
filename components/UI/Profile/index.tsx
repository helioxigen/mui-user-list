import { Avatar } from "@mui/material";
import { stringAvatar } from "@utils";

export const AvatarString = ({ name }) => <Avatar {...stringAvatar(name)} />;
