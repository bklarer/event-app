import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, checkLogin } from "./userActions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
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
    userCreatedEvent: (state, { payload }) => {
      state.userInfo.created_events.push(payload);
    },
    userRemovedEvent: (state, { payload }) => {
      const index = state.userInfo.created_events.findIndex(
        (event) => event.id === payload
      );
      state.userInfo.created_events.splice(index, 1);
    },
    userUpdatedEvent: (state, { payload }) => {
      const existingEvent = state.userInfo.created_events.find(
        (event) => event.id === payload.id
      );
      if (existingEvent) {
        existingEvent.title = payload.title;
        existingEvent.description = payload.description;
        existingEvent.img_url = payload.img_url;
        existingEvent.date = payload.date;
        existingEvent.address = payload.address;
        existingEvent.city = payload.city;
        existingEvent.state = payload.state;
        existingEvent.zip = payload.zip;
      }
    },
    userAddedTicket: (state, { payload }) => {
      state.userInfo.events.push(payload);
    },
    userRemovedTicket: (state, { payload }) => {
      const index = state.userInfo.events.findIndex(
        (event) => event.id === payload
      );
      state.userInfo.events.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(checkLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
      })
      .addCase(checkLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
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
export const {
  logout,
  userCreatedEvent,
  userRemovedEvent,
  userUpdatedEvent,
  userAddedTicket,
  userRemovedTicket,
} = userSlice.actions;
export default userSlice.reducer;
