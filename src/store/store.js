import { configureStore } from "@reduxjs/toolkit"
import notesSlice from "./notesSlice";
import colorSlice from "./colorSlice";
const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    colors: colorSlice.reducer
  }
})

export default store;