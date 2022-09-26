import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFiltered: false,
};

const filterValidator = createSlice({
  name: "filterValidator",
  initialState,
  reducers: {
    isFiltered(state) {
      state.isFiltered = true;
    },
    isNotFiltered(state) {
      state.isFiltered = false;
    },
  },
});

export const { isFiltered, isNotFiltered } = filterValidator.actions;
export default filterValidator.reducer;
