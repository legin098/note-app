import React from "react";
import { NoteModal } from "../components";
import { NotesLayout } from "../layout/NotesLayout";
import { ArchivedNotesView, NoNotesArchivedView } from "../views";
import { useSelector } from "react-redux";

export const ArchivedPage = () => {
  const { notes } = useSelector((state) => state.note);

  const notesArchived = notes.filter((note) => note.archived);

  return (
    <NotesLayout>
      {notesArchived.length > 0 ? (
        <ArchivedNotesView />
      ) : (
        <NoNotesArchivedView />
      )}
      <NoteModal />
    </NotesLayout>
  );
};
