
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Events from './Components/Events/Events';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Headers from './Components/Headers/Headers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
