import { createAsyncThunk } from "@reduxjs/toolkit";


// Testing to see if I like separating out actions from the slice
export const registerUser = createAsyncThunk(
  `user/signup`,
  async (data) =>
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((user) => {
        return user;
      })
);

export const userLogin = createAsyncThunk(
  `user/login`,
  async (data) =>
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((user) => {
        return user;
      })
);

export const checkLogin = createAsyncThunk(
  `user/login`,
  async () =>
    await fetch("/api/me").then((response) => {
      if (response.ok) {
        return response.json().then((user) => {
          console.log(user);
          return user;
        });
      }
    })
);
