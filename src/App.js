import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './routes/home'
import Orders from './routes/orders'
import {Login} from './routes/login'

function App() {
  return (
      <BrowserRouter>
          <Navigation/>
          <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/orders" exact={true} component={Orders}/>
              <Route path="/login" exact={true} component={Login}/>
              <Route path="/signup" exact={true} component={Home}/>
              <Route path="/update-profile" exact={true} component={Home}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
