import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { StarOutline } from "@mui/icons-material";
import { Link as RouterLink, Navigate } from "react-router-dom";

export const NoNotesArchivedView = () => {
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
