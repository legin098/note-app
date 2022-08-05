import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: '3124ew',
    //   title: '',
    //   body: '',
    //   date: 123456,
    //   archived: false
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    onCloseNoteModal: (state) => {
      state.active = null;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.active = null;
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });

      state.messageSaved = "correctly updated";
    },
    setNotesArchived: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map(note => {
        if(note.id = action.payload.id){
          return action.payload
        }
        return note
      })
    }, 
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  onCloseNoteModal,
  clearNotesLogout,
  setNotesArchived
} = noteSlice.actions;
