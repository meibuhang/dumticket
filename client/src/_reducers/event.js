import { GET_EVENT, GET_NEXTEVENT } from '../config/constants.js';

// yg akan pertama kali di baca :
const initialState = {
	data: [],
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
				data: action.payload.data.event,
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
				error: true,
				isLoadings: false
			};

		default:
			return states;
	}
};
