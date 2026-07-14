import { configureStore } from "@reduxjs/toolkit";
import formStudentReducer from "../form-validation-bt/slice";

export const store = configureStore({
  reducer: {
    //child reducer
    formStudentReducer,
  },
});
