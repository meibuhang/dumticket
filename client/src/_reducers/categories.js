import { GET_CATEGORIES, GET_EVENTCATEGORIES } from '../config/constants.js';
// yg akan pertama kali di baca :
const initialState = {
	data: [],
	catData: [],
	isLoading: false,
	isPost: false,
	error: false
};
const catinitialState = {
	datas: [],
	isLoadings: false,
	isPosts: false,
	errors: false
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

export const eventByCategory = (state = catinitialState, action) => {
	switch (action.type) {
		// GET EVENT BY CATEGORY
		case `${GET_EVENTCATEGORIES}_PENDING`:
			return {
				...state,
				isLoadings: true
			};
		case `${GET_EVENTCATEGORIES}_FULFILLED`:
			return {
				...state,
				datas: action.payload.data.category,
				isLoadings: false
			};
		case `${GET_EVENTCATEGORIES}_REJECTED`:
			return {
				...state,
				errors: true,
				isLoadings: false
			};
		default:
			return state;
	}
};
