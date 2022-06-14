import React from "react";
import { getUsers, User } from "@api";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { stringAvatar } from "@utils";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { Container } from "@mui/system";

export default function Home({ users }: { users: User[] }) {
  return (
    <Container>
      <Box sx={{ maxWidth: 450, margin: "0 auto" }}></Box>
    </Container>
  );
}

export async function getStaticProps() {
  const users = await getUsers();

  return {
    props: {
      users,
    },
  };
}
