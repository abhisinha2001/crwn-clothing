import './App.css';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';



function HatsPage(){
  return(
  <div>
    <h1>HATS PAGE</h1>
  </div>
  );
}

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
      </Router>
      
    </div>
  
  );
}

export default App;
