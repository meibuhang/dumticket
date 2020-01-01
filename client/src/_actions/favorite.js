import { GET_FAVORITE } from '../config/constants';
import axios from 'axios';

export const getFavorite = () => {
	const token = localStorage.getItem('auths');
	return {
		type: GET_FAVORITE,
		payload: axios({
			method: 'get',
			url: 'http://localhost:4500/api/dumbticket/event/allfav',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	};
};
