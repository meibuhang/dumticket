import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories } from '../_reducers/categories';

// import { user } from '../_reducers/user';
import { promise, logger } from './middleware';
import { event, events } from '../_reducers/event';
import { eventByCategory } from '../_reducers/categories';
//get all reducers available
//global state come from here

const rootReducers = combineReducers({
	categories,
	eventByCategory,
	event,
	events
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
