import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./features/events/eventsSlice"
import userReducer from "./features/user/userSlice"
import navigationReducer from "./features/navigation/navigationSlice"

const store = configureStore({
    reducer: {
        events: eventsReducer,
        user: userReducer,
        navigation: navigationReducer
    },

})







export default store