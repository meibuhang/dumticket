import { GET_FAVORITE } from '../config/constants.js';

// yg akan pertama kali di baca :
const initialState = {
	dataFav: [],
	isLoadingFav: false,
	isPostFav: false,
	errorFav: false
};
export const userFav = (state = initialState, action) => {
	switch (action.type) {
		//POST

		//GET FAVORITE USER
		case `${GET_FAVORITE}_PENDING`:
			return {
				...state,
				isLoadingFav: true,
				isPostFav: true
			};
		case `${GET_FAVORITE}_FULFILLED`:
			return {
				...state,
				dataFav: action.payload.data,
				isLoadingFav: false,
				isPostFav: false
			};
		case `${GET_FAVORITE}_REJECTED`:
			return {
				...state,
				errorFav: true,
				isLoadingFav: false
			};
		default:
			return state;
	}
};
