import {
  GET_EVENT,
  GET_NEXTEVENT,
  GET_DETAILEVENT,
  GET_SEARCHEVENT
} from "../config/constants.js";

// yg akan pertama kali di baca :
const initialState = {
  event: [],
  isLoading: false,
  isPost: false,
  error: false
};

const nextinitialState = {
  datas: [],
  isLoadings: false,
  isPosts: false,
  errors: false
};

const detailinitialState = {
  detail: [],
  isLoadingDetail: false,
  isPostDetail: false,
  errorDetail: false
};

const searchinitialState = {
  dataSearch: [],
  isLoadingSearch: false,
  isPostSearch: false,
  errorSearch: false
};

export const event = (state = initialState, action) => {
  switch (action.type) {
    //TODAY EVENT
    case `${GET_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENT}_FULFILLED`:
      return {
        ...state,
        event: action.payload.data.event,
        isLoading: false
      };
    case `${GET_EVENT}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };

    default:
      return state;
  }
};

//exports again bcz have same endpoint wt get_event
export const events = (states = nextinitialState, actions) => {
  switch (actions.type) {
    //NEXT EVENT
    case `${GET_NEXTEVENT}_PENDING`:
      return {
        ...states,
        isLoadings: true
      };
    case `${GET_NEXTEVENT}_FULFILLED`:
      return {
        ...states,
        datas: actions.payload.data.event,
        isLoadings: false
      };
    case `${GET_NEXTEVENT}_REJECTED`:
      return {
        ...states,
        errors: true,
        isLoadings: false
      };

    default:
      return states;
  }
};

//export for detail event by cat
export const detailEvent = (statesEvent = detailinitialState, actionsEvent) => {
  switch (actionsEvent.type) {
    //NEXT EVENT

    //Detail Event
    case `${GET_DETAILEVENT}_PENDING`:
      return {
        ...statesEvent,
        isLoadingDetail: true
      };
    case `${GET_DETAILEVENT}_FULFILLED`:
      return {
        ...statesEvent,
        detail: actionsEvent.payload.data,
        isLoadingDetail: false
      };
    case `${GET_DETAILEVENT}_REJECTED`:
      return {
        ...statesEvent,
        errorDetail: true,
        isLoadingDetail: false
      };

    default:
      return statesEvent;
  }
};

//exports by search
export const searchEvent = (
  statesSearch = searchinitialState,
  actionsSearch
) => {
  switch (actionsSearch.type) {
    //NEXT EVENT

    //Detail Event
    case `${GET_SEARCHEVENT}_PENDING`:
      return {
        ...statesSearch,
        isLoadingSearch: true
      };
    case `${GET_SEARCHEVENT}_FULFILLED`:
      return {
        ...statesSearch,
        dataSearch: actionsSearch.payload.data.event,
        isLoadingSearch: false
      };
    case `${GET_SEARCHEVENT}_REJECTED`:
      return {
        ...statesSearch,
        errorSearch: true,
        isLoadingSearch: false
      };

    default:
      return statesSearch;
  }
};
