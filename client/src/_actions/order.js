import { GET_ALLORDER } from "../config/constants";
import axios from "axios";

export const getAllOrder = () => {
  const token = localStorage.getItem("auths");
  return {
    type: GET_ALLORDER,
    payload: axios({
      method: "get",
      url: "http://localhost:4500/api/dumbticket/order/allorder",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
