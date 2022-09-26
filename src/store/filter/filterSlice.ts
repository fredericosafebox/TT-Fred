import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";

const initialState = {
  filteredData: <IUser[]>[],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    applyFilter(state, action: PayloadAction<IUser[]>) {
      //state.filteredData = [];
      state.filteredData = [...action.payload];
    },
    cleanFilter(state) {
      state.filteredData = [];
    },
  },
});

export const { applyFilter, cleanFilter } = filterSlice.actions;
export default filterSlice.reducer;
