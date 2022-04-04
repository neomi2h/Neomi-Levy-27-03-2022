import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
    favoritesList:[],
};

const favoritesReducer = {
  
    addToFavorite(state, action) {
      debugger
      
      for(let i=0; i<state.favoritesList.length;i++){
      if(action.payload.Key===state.favoritesList[i].Key)
      alert('you already add this city to favorites list') 
      return
      }
        state.favoritesList.push(action.payload);
        alert( 'Adding  the city was successful') 
    },

    deletFavorite(state, action) {
      debugger
      let indexToDelete=state.favoritesList.findIndex(x =>x.Key===action.payload);
      state.favoritesList=[...state.favoritesList.filter(x=> x.Key!==state.favoritesList[indexToDelete].Key)]
      alert( 'Deleting the city was successful') 
    }
  };
  
  export default produce((state, action) => createReducer(state, action, favoritesReducer), initialState);