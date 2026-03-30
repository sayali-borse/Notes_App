import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paste: localStorage.getItem("paste")
    ? JSON.parse(localStorage.getItem("paste"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {},
    updateToPastes: (state, action) => {},
    resetAllPaste: (state, action) => {},
    removeFromPaste: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPaste, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
