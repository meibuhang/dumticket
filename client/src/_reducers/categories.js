import { GET_CATEGORIES } from '../config/constants.js';

// yg akan pertama kali di baca :
const initialState = {
	data: [],
	isLoading: false,
	isPost: false,
	error: false
};

export const categories = (state = initialState, action) => {
	switch (action.type) {
		case `${GET_CATEGORIES}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_CATEGORIES}_FULFILLED`:
			return {
				...state,
				data: action.payload.data.category,
				isLoading: false
			};
		case `${GET_CATEGORIES}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		default:
			return state;
	}
};
