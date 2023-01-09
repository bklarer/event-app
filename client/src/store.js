import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./features/events/eventsSlice"
import userReducer from "./features/user/userSlice"

const store = configureStore({
    reducer: {
        events: eventsReducer,
        user: userReducer
    },

})







export default store