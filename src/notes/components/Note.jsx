import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import {
  EditOutlined,
  DeleteOutline,
  ArchiveOutlined,
  MoveToInboxOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveNote,
  startDeletingNote,
  toggleArchived,
} from "../../store/notes";
import Swal from "sweetalert2";

export const Note = ({ note }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote(note));
  };

  const toggleArchivedNote = () => {
    dispatch(toggleArchived(note));
  };

  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingNote(note.id));
        Swal.fire("Deleted!", "Your note has been deleted.", "success");
      }
    });
  };

  const dateString = useMemo(() => {
    const newDate = new Date(note.date);
    return newDate.toDateString();
  }, [note.date]);

  return (
    <Card
      sx={{
        width: "265px",
        height: "280px",
        backgroundColor: "blueviolet",
        borderRadius: "20px",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, my: 1 }}
          color="text.secondary"
          gutterBottom
        >
          {dateString}
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          {note.title}
        </Typography>
        <Typography variant="body2">{note.body}</Typography>
      </CardContent>
      <CardActions
        sx={{
          mb: 1,
          width: "260px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {note.archived ? (
          <Button size="small" onClick={toggleArchivedNote}>
            <MoveToInboxOutlined />
          </Button>
        ) : (
          <Button size="small" onClick={toggleArchivedNote}>
            <ArchiveOutlined />
          </Button>
        )}
        <Button size="small" onClick={onClickNote}>
          <EditOutlined />
        </Button>
        <Button size="small" onClick={onDelete}>
          <DeleteOutline />
        </Button>
      </CardActions>
    </Card>
  );
};
