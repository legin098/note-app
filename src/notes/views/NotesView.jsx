import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Note } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { startNewNote } from "../../store/notes";

export const NotesView = () => {
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
        gap={20}
      >
        <Typography variant="h5">My Notes</Typography>

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
      <Grid container wrap="wrap" gap={4}>
      {notes.map((note) => {
          if (!note.archived) {
            return <Note key={note.id} note={note} />;
          }
        })}
      </Grid>
    </Grid>
  );
};
