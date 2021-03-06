import { GET_PROFILE } from '../config/constants';
import axios from 'axios';

export const getProfile = () => {
	const token = localStorage.getItem('auths');
	return {
		type: GET_PROFILE,
		payload: axios({
			method: 'get',
			url: 'http://localhost:4500/api/dumbticket/auth/getuser',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	};
};
