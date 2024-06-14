import axios from "axios";
import { server } from "../../server";

// create product
export const createevent = (newForm) => async (dispatch) => {
  try {
    console.log("newForm data:", newForm);
    dispatch({
      type: "eventCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );

    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
    //console.log("Event data:", data.event);
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get All events of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventsRequest",
    });
    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({
      type: "getAllEventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsFailed",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFailed",
      payload: error.response.data.message,
    });
  }
};
