import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './routes/home'
import Orders from './routes/orders'
import {Login} from './routes/login'
import {SignUp} from './routes/signup'
import {UpdateProfile} from './routes/update-profile'
import ProductList from "./routes/products";

const PageNotFound = () => <div><h1>Page not found</h1></div>

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/orders" exact={true} component={Orders}/>
                <Route path="/login" exact={true} component={Login}/>
                <Route path="/signup" exact={true} component={SignUp}/>
                <Route path="/update-profile" exact={true} component={UpdateProfile}/>
                <Route path="/products" exact={true} component={ProductList}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
