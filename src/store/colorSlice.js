import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: 'blue',
    text: '#3874ba',
    lightBG: '#a1eefe',
    darkBG: '#8cd6f1'
  },
  {
    name: 'green',
    text: '#1fa14c',
    lightBG: '#bfffc3',
    darkBG: '#a0ecab'
  },
  {
    name: 'red',
    text: '#c81300',
    lightBG: '#ffc3c3',
    darkBG: '#f4a19d'
  },
  {
    name: 'yellow',
    text: '#ae6704',
    lightBG: '#ffde9f',
    darkBG: '#eec680'
  }
]

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {}
})

export const notesActions = colorSlice.actions;

export default colorSlice