import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
    listCities:[],
};

const listCitiesReducer = {

    setListCity(state, action) {
        let temp=action.payload
        let d=[];
           for(let i=0; i<temp.length;i++){
               d[i]={id:i,
                     Key:temp[i].Key,
                     label:temp[i].AdministrativeArea.LocalizedName,
                     }}
        state.listCities = d;
    },


    getListCity(state, action) {
    }
  };
  
  export default produce((state, action) => createReducer(state, action, listCitiesReducer), initialState);
