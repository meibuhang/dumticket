// import { POST_USER } from '../config/constants.js';

// // yg akan pertama kali di baca :
// const initialState = {
// 	data: [],
// 	isLoading: false,
// 	isPost: false,
// 	error: false
// };

// export const user = (state = initialState, action) => {
// 	switch (action.type) {
// 		//POST
// 		case `${POST_USER}_PENDING`:
// 			return {
// 				...state,
// 				isLoading: true,
// 				isPost: true
// 			};
// 		case `${POST_USER}_FULFILLED`:
// 			return {
// 				...state,
// 				data: action.payload.data.user,
// 				isLoading: false,
// 				isPost: false
// 			};
// 		case `${POST_USER}_REJECTED`:
// 			return {
// 				...state,
// 				error: true,
// 				isLoading: false
// 			};
// 		default:
// 			return state;
// 	}
// };
