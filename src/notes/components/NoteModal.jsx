import { SaveOutlined, BackspaceOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import {
  onCloseNoteModal,
  setActiveNote,
  startSaveNote,
} from "../../store/notes";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-60%, -20%)",
  },
};

Modal.setAppElement("#root");

export const NoteModal = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved } = useSelector((state) => state.note);

  //console.log(note)

  const { body, title, date, onInputChange, formState } = useForm(note);

  const onCloseModal = () => {
    //console.log("Close modal");
    dispatch(onCloseNoteModal());
  };

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toDateString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if(messageSaved.length > 0){
      Swal.fire('Successful action', '', "success")
    }
  }, [messageSaved])
  

  const onSaveNote = () => {
    dispatch(startSaveNote());
    dispatch(onCloseNoteModal());
  };

  return (
    <Modal
      isOpen={!!note}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 1, padding: 2 }}
      >
        <Grid item>
          <Typography fontSize={30} fontWeight="light" sx={{ mb: 2}}>
            {dateString}
          </Typography>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Enter a title"
            label="Title"
            name="title"
            value={title}
            onChange={onInputChange}
            sx={{ border: "none", mb: 2 }}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            minRows={4}
            placeholder="Enter the content"
            label="Content"
            name="body"
            value={body}
            onChange={onInputChange}
            sx={{ border: "none", mb: 2 }}
          />
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Button color="primary" sx={{ padding: 2 }} onClick={onCloseModal}>
            <BackspaceOutlined sx={{ fontSize: 25, mr: 1 }} />
            Cancelar
          </Button>
          <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
            <SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};
