import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk("events/fetchEvents", () => {
  return fetch("/api/events")
    .then((response) => response.json())
    .then((events) => events);
});

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    entities: [],
    status: null,
    loading: false,
    error: null,
  },
  reducers: {
    eventAdded(state, action) {
      state.entities.push(action.payload);
    },
    eventUpdated(state, action) {
      const existingEvent = state.entities.find(
        (event) => event.id === action.payload.id
      );
      if (existingEvent) {
        existingEvent.title = action.payload.title;
        existingEvent.description = action.payload.description;
        existingEvent.img_url = action.payload.img_url;
        existingEvent.date = action.payload.date;
        existingEvent.address = action.payload.address;
        existingEvent.city = action.payload.city;
        existingEvent.state = action.payload.state;
        existingEvent.zip = action.payload.zip;
      }
    },
    eventRemoved(state, action) {
      const index = state.entities.findIndex(
        (event) => event.id === action.payload
      );
      state.entities.splice(index, 1);
    },
    ticketAdded(state, action) {
      const existingEvent = state.entities.find(
        (event) => event.id === action.payload.event_id
      );
      if (existingEvent) {
        existingEvent.tickets.push(action.payload);
      }
    },
    ticketRemoved(state, action) {
      const existingEvent = state.entities.find(
        (event) => event.id === action.payload.eventId
      );
      const index = existingEvent.tickets.findIndex(
        (ticket) => ticket.id === action.payload.ticketId
      );
      if (existingEvent) {
        existingEvent.tickets.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const selectAllEvents = (state) => state.events.entities;
export const selectEventById = (state, eventId) =>
  state.events.entities.find((event) => event.id === eventId);

export const futureEvents = (state) =>
  state.events.entities.filter(
    (event) => event.date >= new Date().toISOString()
  );

export const {
  eventAdded,
  eventUpdated,
  eventRemoved,
  ticketAdded,
  ticketRemoved,
} = eventsSlice.actions;
export default eventsSlice.reducer;
