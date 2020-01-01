import { GET_PROFILE } from '../config/constants.js';

// yg akan pertama kali di baca :
const initialState = {
	data: [],
	isLoading: false,
	isPost: false,
	error: false
};

export const user = (state = initialState, action) => {
	switch (action.type) {
		//POST
		case `${GET_PROFILE}_PENDING`:
			return {
				...state,
				isLoading: true,
				isPost: true
			};
		case `${GET_PROFILE}_FULFILLED`:
			return {
				...state,
				data: action.payload.data,
				isLoading: false,
				isPost: false
			};
		case `${GET_PROFILE}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};

		default:
			return state;
	}
};
