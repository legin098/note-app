import {
  AppBar,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";
import { startNewNote } from "../../store/notes/thunks";
import { Link as RouterLink, Navigate } from "react-router-dom";

export const NavBar = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };


  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100vw",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            NotesApp
          </Typography>

          

          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
