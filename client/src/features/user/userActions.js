import { createAsyncThunk } from "@reduxjs/toolkit";

// Testing to see if I like separating out actions from the slice
export const registerUser = createAsyncThunk(
  `user/signup`,
  async (data, { rejectWithValue }) =>
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((user) => {
          return user;
        });
      } else {
        return response.json().then((error) => {
          return rejectWithValue(error.errors);
        });
      }
    })
);

export const userLogin = createAsyncThunk(
  `user/login`,
  async (data, { rejectWithValue }) =>
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((user) => {
          return user;
        });
      } else {
        return response.json().then((error) => {
          return rejectWithValue(error.errors);
        });
      }
    })
);

export const checkLogin = createAsyncThunk(
  `user/check`,
  async () =>
    await fetch("/api/me").then((response) => {
      if (response.ok) {
        return response.json().then((user) => {
          return user;
        });
      }
    })
);
