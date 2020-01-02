import { GET_ALLORDER } from "../config/constants.js";

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
