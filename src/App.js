
import './App.css';
import Home from './Components/home'
import Favorites from './Components/favorites';
import {Provider} from 'react-redux';
import store from './Redux/store'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function Menu(){
  return(
    
    <ul>
    <li><Link to ="/">Home</Link></li>
    <li><Link to ="/favorites">Favorites</Link> </li>
    
 </ul>
  )
}

function App() {
  return (
    
    <Provider store = {store}>
       <div className="App">
         <Router>
            <Menu></Menu>
              <Switch>
                 <Route path ="/favorites"> <Favorites></Favorites>
                 </Route>
                 <Route path ="/"> <Home></Home>
                 </Route>
              </Switch>
          </Router>
        </div>
        </Provider>
        
  );
}

export default App;
