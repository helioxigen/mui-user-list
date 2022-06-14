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
import { UserList } from "@components/UserList";
import { SearchInput } from "@components/Form/SearchInput";
import { FloatingBar } from "@components/UI/FloatingBar";
import { useRouter } from "next/router";
import { useFuse } from "utils/hooks/useFuse";
// import { Container } from "@mui/system";

export default function Home({ users }: { users: User[] }) {
  const {
    query: { search },
  } = useRouter();

  const [list, searchValue, onSearchChange] = useFuse(users, search as string, {
    keys: ["name", "email", "username", "company.name", "address"],
  });

  return (
    <>
      <FloatingBar>
        <SearchInput
          label="Search contacts"
          value={searchValue}
          onChange={onSearchChange}
        />
      </FloatingBar>
      <Typography variant="h2" component="h1" textAlign="left" gutterBottom>
        ADDRESS <br /> BOOK
      </Typography>
      <UserList users={list} />
    </>
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
