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
        eventUpdated(state, action) {
            const event = state.entities.find((event => event.id === action.payload.id))
            event.url = action.payload //will have to look at this
        },
        eventRemoved(state, action) {
            const index = state.entities.findIndex((event)=> event.id === action.payload);
            state.entities.splice(index, 1)
        }
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