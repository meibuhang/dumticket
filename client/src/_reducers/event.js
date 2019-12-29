import { GET_EVENT } from '../config/constants.js';

// yg akan pertama kali di baca :
const initialState = {
	data: [],
	isLoading: false,
	isPost: false,
	error: false
};

export const event = (state = initialState, action) => {
	switch (action.type) {
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
