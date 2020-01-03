import { GET_ALLORDER, GET_ORDERPENDING } from "../config/constants.js";

// yg akan pertama kali di baca :
const initialStateOrder = {
  dataOrder: [],
  isLoadingOrder: false,
  isPostOrder: false,
  errorOrder: false
};

export const Order = (state = initialStateOrder, action) => {
  switch (action.type) {
    //POST
    case `${GET_ALLORDER}_PENDING`:
      return {
        ...state,
        isLoadingOrder: true,
        isPostOrder: true
      };
    case `${GET_ALLORDER}_FULFILLED`:
      return {
        ...state,
        dataOrder: action.payload.data,
        isLoadingOrder: false,
        isPostOrder: false
      };
    case `${GET_ALLORDER}_REJECTED`:
      return {
        ...state,
        errorOrder: true,
        isLoadingOrder: false
      };

    default:
      return state;
  }
};

// PENDING ORDER FOR PAYMENT :
const initialStatePending = {
  dataPending: [],
  isLoadingPending: false,
  isPostPending: false,
  errorPending: false
};

export const Orderpending = (state = initialStatePending, action) => {
  switch (action.type) {
    //POST
    case `${GET_ORDERPENDING}_PENDING`:
      return {
        ...state,
        isLoadingPending: true,
        isPostOrder: true
      };
    case `${GET_ORDERPENDING}_FULFILLED`:
      return {
        ...state,
        dataPending: action.payload.data,
        isLoadingPending: false,
        isPostOrder: false
      };
    case `${GET_ORDERPENDING}_REJECTED`:
      return {
        ...state,
        errorPending: true,
        isLoadingPending: false
      };

    default:
      return state;
  }
};
