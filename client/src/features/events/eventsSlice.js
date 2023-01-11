import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchEvents = createAsyncThunk("events/fetchEvents", () => {
    return fetch("/api/events")
        .then((response) => response.json())
        .then((events) => events)
})


const eventsSlice = createSlice({
    name: "events",
    initialState: {
        entities: [],
        status: null,
        loading: false
    },
    reducers: {
        eventAdded(state, action) {
            state.entities.push(action.payload)
        },
        eventUpdated(state, action) {
            const existingEvent = state.entities.find((event => event.id === action.payload.id))
            if (existingEvent) {
                existingEvent.title = action.payload.title
                existingEvent.description = action.payload.description
                existingEvent.img_url = action.payload.img_url
                existingEvent.date = action.payload.date
                existingEvent.address = action.payload.address
                existingEvent.city = action.payload.city
                existingEvent.state = action.payload.state
                existingEvent.zip = action.payload.zip

            }
        },
        eventRemoved(state, action) {
            const index = state.entities.findIndex((event)=> event.id === action.payload);
            state.entities.splice(index, 1)
        }
    },
    extraReducers: {
        [fetchEvents.pending](state) {
            state.status = "loading"
            state.loading = true
        },
        [fetchEvents.fulfilled](state, action) {
            state.entities = action.payload
            state.status = "idle"
            state.loading = false
        },
        [fetchEvents.rejected](state, action) {
            state.status = "failed";
            state.error = action.error.message
            state.loading = false
        },

    },

})

export const selectAllEvents = state => state.events.entities
export const selectEventById = (state, eventId) =>
    state.events.entities.find(event => event.id === eventId)


export const { eventAdded, eventUpdated, eventRemoved } = eventsSlice.actions;
export default eventsSlice.reducer