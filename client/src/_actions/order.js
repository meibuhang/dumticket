import { GET_ALLORDER, GET_ORDERPENDING } from "../config/constants";
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

//ORDER PENDING
export const getOrderpending = () => {
  const token = localStorage.getItem("auths");
  return {
    type: GET_ORDERPENDING,
    payload: axios({
      method: "get",
      url: "http://localhost:4500/api/dumbticket/order/allorder/pending",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
