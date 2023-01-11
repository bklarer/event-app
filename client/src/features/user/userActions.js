import { createAsyncThunk } from "@reduxjs/toolkit"

export const registerUser = createAsyncThunk(
    `user/signup`,
    async (data) => await(
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(user => {
            return user
        })
    )
)

export const userLogin = createAsyncThunk(
    `user/login`,
    async (data) => await(
        fetch("/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(user => {
            return user
        })

    )
)

export const checkLogin = createAsyncThunk(
    `user/login`,
    async () => await(
        fetch("/api/me")
            .then((response) => response.json())
            .then ((user) => {
                return user
            })
        )
    )