import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { StarOutline } from "@mui/icons-material";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const NoNotesCreatedView = () => {
  const dispatch = useDispatch();
  const { notes, isSaving } = useSelector((state) => state.note);


  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
    >
      <Grid
        container
        xs={12}
        direction="row"
        alignItems="center"
        sx={{ mb: 2 }}
        gap={18}
      >
        <Typography variant="h5">My notes</Typography>

        <Grid item>
          <Button
            variant="outlined"
            onClick={onClickNewNote}
            disabled={isSaving}
          >
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              Create a note
            </Typography>
          </Button>
          <Link
            variant="h6"
            component={RouterLink}
            color="inherit"
            to="/archived-notes"
            sx={{ width: 170, ml: 3 }}
          >
            Archived notes
          </Link>
        </Grid>
      </Grid>

      <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "calc(85vh - 80px)",
          backgroundColor: "primary.main",
          borderRadius: 3,
        }}
      >
        <Grid item>
          <StarOutline sx={{ fontSize: 100, color: "white" }} />
        </Grid>
        <Grid item>
          <Typography color="white" variant="h5">
            There are not note
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
