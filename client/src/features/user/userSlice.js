import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userActions";
import { userLogin } from "./userActions"

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false
            state.userInfo = null
            state.error = null
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.success = true
        },
        [registerUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
    },

})



export const {logout} = userSlice.actions
export default userSlice.reducer




