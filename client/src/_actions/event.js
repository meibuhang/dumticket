import { GET_EVENT } from '../config/constants';
import axios from 'axios';
export const getEvent = () => {
	return {
		type: GET_EVENT,
		payload: axios({
			method: 'GET',
			url: 'http://localhost:4500/api/dumbticket/event/allevent'
		})
	};
};
