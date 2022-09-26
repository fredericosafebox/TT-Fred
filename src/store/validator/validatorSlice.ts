import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validate: false,
};

const validatorSlice = createSlice({
  name: "validator",
  initialState,
  reducers: {
    isAltered(state) {
      state.validate = true;
    },
  },
});

export const { isAltered } = validatorSlice.actions;
export default validatorSlice.reducer;
