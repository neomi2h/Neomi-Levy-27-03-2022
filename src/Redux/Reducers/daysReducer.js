import produce from 'immer'
import createReducer from "./ReducerUtils";
import Moment from 'moment';

const initialState = {daysList:[],
};

const daysReducer = {
    setDays(state, action) {
        let temp=action.payload.DailyForecasts
        let d=[];
        Moment.locale('en');
           for(let i=0; i<5;i++){
               d[i]={id:i,
                     Date:Moment(temp[i].Date).format('ddd '),
                     MiniTemp:Number(((temp[i].Temperature.Minimum.Value-32)/1.8).toFixed(1)),
                     MaxTemp:Number(((temp[i].Temperature.Maximum.Value-32)/1.8).toFixed(1)),
                     Day:temp[i].Day.Icon,}}
        state.daysList = d;
        console.log(d)
    },

    getDays(state, action) {
    }
  };
  
  export default produce((state, action) => createReducer(state, action, daysReducer), initialState);
