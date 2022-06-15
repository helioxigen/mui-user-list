import { User } from "@api";
import { UserCard } from "@components/User/UserCard";
import { Box, SwipeableDrawer, useMediaQuery } from "@mui/material";
import theme from "@theme";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

interface SideDisplayProps {
  user?: User;
  children?: React.ReactNode;
}

export const SideDisplay: React.FC<SideDisplayProps> = ({ children, user }) => {
  const router = useRouter();

  const bigScreen = useMediaQuery(theme.breakpoints.up("lg"));

  if (bigScreen)
    return (
      <Box sx={{ position: "absolute", height: "100%", ml: 6, left: "100%" }}>
        <Box
          sx={{
            position: "sticky",
            top: 30,
          }}
        >
          <AnimatePresence>
            {user && (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                style={{ position: "absolute", top: 0 }}
              >
                <UserCard user={user} />
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    );

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={!!user}
      onClose={() => router.push("/")}
      onOpen={() => null}
    >
      {user && <UserCard user={user} />}
    </SwipeableDrawer>
  );
};
