import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) ||  []
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, actions) {
      state.notes.push(actions.payload)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    deleteNote(state, actions) {
      state.notes = state.notes.filter(note=>note.id !== actions.payload)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    }
  }
})

export const notesActions = notesSlice.actions;

export default notesSlice