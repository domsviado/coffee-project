import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './routes/home'
import Orders from './routes/orders'
import Login from "./routes/login";
import SignUp from './routes/signup'
import {UpdateProfile} from './routes/update-profile'
import ProductList from "./routes/products";
import {withFirebase} from './components/Firebase';
import {AuthUserContext} from './components/Session';
import { withAuthentication } from './components/Session';

const PageNotFound = () => <div><h1>Page not found</h1></div>

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null
        }
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({authUser})
                    : this.setState({authUser: null});
            },
        );
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <AuthUserContext.Provider value={this.state.authUser}>
                <BrowserRouter>
                    <Navigation authUser={this.state.authUser}/>
                    <Switch>
                        <Route path="/" exact={true} component={Login}/>
                        <Route path="/signup" exact={true} component={SignUp}/>
                        <Route path="/home" exact={true} component={Home}/>
                        <Route path="/orders" exact={true} component={Orders}/>
                        <Route path="/update-profile" exact={true} component={UpdateProfile}/>
                        <Route path="/products" exact={true} component={ProductList}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </BrowserRouter>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App);
