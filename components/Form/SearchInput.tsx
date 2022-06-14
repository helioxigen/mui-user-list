import React, { useEffect } from "react";
// import SearchIcon from "@me"
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useRouter } from "next/router";

interface SearchInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label = "Search",
  value,
  onChange,
}) => {
  const {
    query: { search },
    push,
  } = useRouter();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value);
    push({ search: value ? `search=${value}` : "" });
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={label}
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={handleChange}
      />
    </Paper>
  );
};
