import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: null,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    pageChange: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { pageChange } = navigationSlice.actions;
export default navigationSlice.reducer;
