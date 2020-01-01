import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categories } from '../_reducers/categories';

// import { user } from '../_reducers/user';
import { promise, logger } from './middleware';
import { event, events, detailEvent } from '../_reducers/event';
import { eventByCategory } from '../_reducers/categories';
import { user } from '../_reducers/user';
import { userFav } from '../_reducers/favorite';
//get all reducers available
//global state come from here

const rootReducers = combineReducers({
	categories,
	eventByCategory,
	event,
	events,
	detailEvent,
	user,
	userFav
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
