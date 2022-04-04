import $ from 'jquery'
import {actions} from '../Actions/action'

export const getDays = ({ dispatch, getState }) => next => action => {
  
    if (action.type === 'GET_DAYS') {
         $.getJSON(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${action.payload}?apikey=wCUlS8ArYxZQ3mK7zqHnC69aU0aSQkYZ` , function (data){
          console.log(data);
        dispatch(actions.setDays(data));
       })
    }
    return next(action)
}

export const getListCity = ({ dispatch, getState }) => next => action => {
  
  if (action.type === 'GET_LIST_CITY') {
       $.getJSON(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=wCUlS8ArYxZQ3mK7zqHnC69aU0aSQkYZ&q=${action.payload}` , function (data){
      dispatch(actions.setListCity(data));
     })
  }
  return next(action)
}

export const getToDay = ({ dispatch, getState }) => next => action => {
  debugger
  if (action.type === 'GET_TO_DAY') {
       $.getJSON(`http://dataservice.accuweather.com/currentconditions/v1/${action.payload}?apikey=wCUlS8ArYxZQ3mK7zqHnC69aU0aSQkYZ` , function (data){
       dispatch(actions.setToDay(data));
     })
  }
  return next(action)
}