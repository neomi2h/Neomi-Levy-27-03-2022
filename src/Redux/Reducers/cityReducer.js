import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
    city:[{Key:'215854',label:'Tel Aviv'}],
};

const cityReducer = {

    setCity(state, action) {
        console.log(action.payload)
        let temp=action.payload
        let d=[];
           for(let i=0; i<1;i++){
               d[i]={id:i,
                    Key:temp.Key,
                    label:temp.label,
                     }}
        state.city = d;
    },


    getCity(state, action) {
    }
  };
  
  export default produce((state, action) => createReducer(state, action, cityReducer), initialState);
