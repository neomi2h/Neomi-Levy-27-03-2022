import { createStore, combineReducers, applyMiddleware} from 'redux';
import favoritesList from './Reducers/favoritesReducr'
import daysList from './Reducers/daysReducer'
import city from './Reducers/cityReducer'
import toDay from './Reducers/toDayReducer'
import listCities from './Reducers/listCitiesReducer'
import {getDays} from './Middleware/middleware';
import {getListCity} from './Middleware/middleware';
import {getToDay} from './Middleware/middleware';

const reducer =combineReducers({favoritesList,daysList,city,toDay,listCities})

const store = createStore(reducer,applyMiddleware(getListCity,getDays,getToDay)) 

window.store = store;

export default store;