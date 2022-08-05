import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Note } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, Navigate } from "react-router-dom";

export const ArchivedNotesView = () => {
  const { notes } = useSelector((state) => state.note);

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
        <Typography variant="h5">Archived Notes</Typography>

        <Link variant="h6" component={RouterLink} color="inherit" to="/">
          &lt; Go back to unarchived notes
        </Link>
      </Grid>
      <Grid container wrap="wrap" gap={4}>
        {notes.map((note) => {
          if (note.archived) {
            return <Note key={note.id} note={note} />;
          }
        })}
      </Grid>
    </Grid>
  );
};
