import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: {
    maSV: "",
    name: "",
    phone: "",
    email: "",
  },

  listStudent: [],
};

const formStudentSlice = createSlice({
  name: "initialState",
  initialState,
  reducers: {},
});

export default formStudentSlice.reducer;
