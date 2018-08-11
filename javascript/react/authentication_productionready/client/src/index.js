import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers';
import {applyMiddleware, createStore} from 'redux';
import SignIn from './components/auth/signin';
import App from "./App";
import reduxThunk from 'redux-thunk';
import history from './history';
import signout from "./components/auth/signout";
import Signup from "./components/auth/signup";
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import {AUTH_USER} from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
    // we need to update user application state
    console.log('token found!! -> ', token);
    store.dispatch({type: AUTH_USER})
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <Route path="/" component={App}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signout" component={signout}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/feature" component={RequireAuth(Feature)}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
