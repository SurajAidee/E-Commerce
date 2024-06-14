import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  event: [],
  events: [],
  message: "",
  value: 0,
};

//define actions
const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByAmount = createAction("counter/incrementByAmount");
const eventCreateRequest = createAction("eventCreateRequest");
const eventCreateSuccess = createAction("eventCreateSuccess");
const eventCreateFail = createAction("eventCreateFail");
const getAllEventsRequest = createAction("getAllEventsRequest");
const getAllEventsSuccess = createAction("getAllEventsSuccess");
const getAllEventsFailed = createAction("getAllEventsFailed");
const deleteEventRequest = createAction("deleteEventRequest");
const deleteEventSuccess = createAction("deleteEventSuccess");
const deleteEventFailed = createAction("deleteEventFailed");
const clearErrors = createAction("clearErrors");

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(eventCreateRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(eventCreateSuccess, (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase(eventCreateFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    // get all events
    .addCase(getAllEventsRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllEventsSuccess, (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase(getAllEventsFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // delete product of a shop
    .addCase(deleteEventRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteEventSuccess, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase(deleteEventFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
