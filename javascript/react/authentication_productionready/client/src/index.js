import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import SignIn from './components/auth/signin';
import App from "./App";
import reduxThunk from 'redux-thunk';
import history from './history';
import signout from "./components/auth/signout";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter history={history}>
            <div>
                <Route path="/" component={App}/>
                    <Route path="/signin" component={SignIn}/>
                <Route path="/signout" component={signout}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
