import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setNotesArchived
} from "./";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote);
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      archived: false,
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/noteApp/notes`));
    const setDocResp = await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const notes = await loadNotes(uid);
    //console.log(notes);

    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().note;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/noteApp/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch( updateNote(note) )
  };
};

export const toggleArchived = (note) => {
  return async (dispatch, getState) => {
    
    const { uid } = getState().auth;

    const noteToFirestore = { ...note, archived: !note.archived }
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/noteApp/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore);

    // await updateDoc(docRef, { archived: !note.archived })
    dispatch(startLoadingNotes())
  }
}

export const startDeletingNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const docRef = doc(FirebaseDB, `${uid}/noteApp/notes/${id}`);
    await deleteDoc(docRef)

    dispatch(deleteNoteById(id))
  }
}