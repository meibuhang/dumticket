import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories } from '../_reducers/categories';

// import { user } from '../_reducers/user';
import { promise, logger } from './middleware';
import { event } from '../_reducers/event';
//get all reducers available
//global state come from here

const rootReducers = combineReducers({
	categories,
	// user,
	event
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
