import {
  GET_EVENT,
  GET_NEXTEVENT,
  GET_DETAILEVENT,
  GET_SEARCHEVENT
} from "../config/constants";
import axios from "axios";

//All Event
//event today
export const getEvent = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = String(today.getFullYear());

  today = yyyy + "-" + mm + "-" + dd;
  return {
    type: GET_EVENT,
    payload: axios({
      method: "GET",
      url:
        "http://localhost:4500/api/dumbticket/event/start_date/?startdate=" +
        today
    })
  };
};

//event tomorrow
export const getNextEvent = () => {
  let next = new Date();

  let dd = String(next.getDate() + 1).padStart(2, "0");
  let mm = String(next.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = String(next.getFullYear());
  next = yyyy + "-" + mm + "-" + dd;
  //   next = mm + "-" + dd + "-" + yyyy;
  return {
    type: GET_NEXTEVENT,
    payload: axios({
      method: "GET",
      url:
        "http://localhost:4500/api/dumbticket/event/start_date/?startdate=" +
        next
    })
  };
};

//event detail
export const getDetailEvent = idEvent => {
  return {
    type: GET_DETAILEVENT,
    payload: axios({
      method: "GET",
      url: "http://localhost:4500/api/dumbticket/category/event/" + idEvent
    })
  };
};

//Search Event
export const getSearchevent = name => {
  return {
    type: GET_SEARCHEVENT,
    payload: axios({
      method: "GET",
      url: "http://localhost:4500/api/dumbticket/event/title/" + name
    })
  };
};
