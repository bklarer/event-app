import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// export const fetchEvents = createAsyncThunk("events/fetchEvents", () => {
//     return fetch("/events")
//         .then((response) => response.json())
//         .then((events) => events)
// })


const eventsSlice = createSlice({
    name: "events",
    initialState: {
        entities: [],
        status: "idle",
    },
    reducers: {
        eventAdded(state, action) {
            state.entities.push(action.payload)
        },
    },
    // extraReducers: {
    //     [fetchEvents.pending](state) {
    //         state.status = "loading"
    //     },
    //     [fetchEvents.fulfilled](state, action) {
    //         state.entities = action.payload;
    //         state.status = "idle";
    //     },
    // },

})





export default eventsSlice