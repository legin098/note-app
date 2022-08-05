import React from "react";
import { NoteModal } from "../components";
import { NotesLayout } from "../layout/NotesLayout";
import { NoNotesCreatedView, NotesView } from "../views";
import { useDispatch, useSelector } from "react-redux";

export const Homepage = () => {
  const { notes } = useSelector((state) => state.note);

  const unfiledNotes = notes.filter((note) => !note.archived);

  return (
    <NotesLayout>
      {unfiledNotes.length > 0 ? <NotesView /> : <NoNotesCreatedView />}
      <NoteModal />
    </NotesLayout>
  );
};
