import { GET_CATEGORIES, GET_EVENTCATEGORIES } from '../config/constants';
import axios from 'axios';
export const getCategories = () => {
	return {
		type: GET_CATEGORIES,
		payload: axios({
			method: 'GET',
			url: 'http://localhost:4500/api/dumbticket/category/allcategory'
		})

		//payload bisa taruh di axios, tp taruh axios config
	};
};

export const getEventCategories = (idCat) => {
	return {
		type: GET_EVENTCATEGORIES,
		payload: axios({
			method: 'GET',
			url: `http://localhost:4500/api/dumbticket/category/${idCat}/allevent`
		})

		//payload bisa taruh di axios, tp taruh axios config
	};
};
