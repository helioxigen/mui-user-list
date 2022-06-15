import { User } from "@api";
import { AvatarString } from "@components/UI/Profile";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { Entry } from "@components/UI/Profile/Entry";
import { DataDisplay } from "@components/UI/Profile/DataDisplay";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Map } from "@components/Map";
import { objParse } from "@utils";
import Link from "next/link";

interface UserCardProps {
  user: User;
  defaultExpanded?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  defaultExpanded = false,
}) => {
  const { geo, ...address } = user.address;

  return (
    <Card sx={{ minWidth: 320 }} elevation={12}>
      <CardHeader
        avatar={user?.name && <AvatarString name={user?.name} />}
        action={
          <Link scroll={false} href="/">
            <IconButton component="a" aria-label="close">
              <CloseIcon />
            </IconButton>
          </Link>
        }
        title={user?.name}
        subheader={`@${user?.username}`}
      />
      <CardContent>
        <Typography variant="h4">{user?.company.name}</Typography>
        <Typography color="gray" variant="subtitle1">
          {user?.company.bs}
        </Typography>
        <Typography variant="body1" mt={2}>
          {user?.company.catchPhrase}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component="a" href={`tel:${user?.phone}`} size="small">
          Call
        </Button>
        <Button component="a" href={user?.website} size="small">
          Open website
        </Button>
      </CardActions>
      <Accordion expanded={defaultExpanded || undefined}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {address && <DataDisplay data={address as any} />}
          {geo && <Map center={objParse(geo, parseFloat)} zoom={8} />}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
