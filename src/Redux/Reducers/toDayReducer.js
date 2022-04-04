import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
    toDay:[{WeatherText:'Overcast',Temperature:'21'}],
};

const toDayReducer = {
    setToDay(state, action) {
        debugger
        let temp=action.payload
        let d=[];
           for(let i=0; i<temp.length;i++){
               d[i]={id:i,
                     WeatherText:temp[i].WeatherText,
                     Temperature:temp[i].Temperature.Metric.Value,
                     }}
        state.toDay = d;
      },

    getToDay(state, action) {
    }
  };
  
  export default produce((state, action) => createReducer(state, action, toDayReducer), initialState);
