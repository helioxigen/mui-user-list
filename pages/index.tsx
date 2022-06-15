import React from "react";
import { getUsers, User } from "@api";
import { Box, Typography, Stack } from "@mui/material";
import { UserList } from "@components/User/UserList";
import { SearchInput } from "@components/Form/SearchInput";
import { FloatingBar } from "@components/UI/FloatingBar";
import { useRouter } from "next/router";
import { useFuse } from "utils/hooks/useFuse";
import { Layout } from "@components/UI/Layout";
import { UserCard } from "@components/User/UserCard";
import { AnimatePresence, motion } from "framer-motion";

export default function Home({ users }: { users: User[] }) {
  const {
    query: { search, id },
  } = useRouter();

  const [list, searchValue, onSearchChange] = useFuse(users, search as string, {
    keys: ["name", "company.name"],
  });

  const [currentUser] = users.filter(
    (user) => user.id === parseInt(id as string)
  );

  return (
    <Layout>
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
      <Stack sx={{ position: "relative" }}>
        <UserList users={list} />
        <Box sx={{ position: "absolute", height: "100%", ml: 6, left: "100%" }}>
          <Box
            sx={{
              position: "sticky",
              top: 30,
            }}
          >
            <AnimatePresence>
              {currentUser && (
                <motion.div
                  key={currentUser.id}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  style={{ position: "absolute", top: 0 }}
                >
                  <UserCard user={currentUser} />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
        {/* )} */}
      </Stack>
    </Layout>
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
