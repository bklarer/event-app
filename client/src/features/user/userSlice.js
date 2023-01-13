import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, checkLogin } from "./userActions";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [checkLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [checkLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [checkLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const hostedEvents = (state) =>
  state.user.userInfo.created_events.filter(
    (event) => event.date >= new Date().toISOString()
  );
export const eventsAttending = (state) =>
  state.user.userInfo.events.filter(
    (event) => event.date >= new Date().toISOString()
  );
export const { logout } = userSlice.actions;
export default userSlice.reducer;
