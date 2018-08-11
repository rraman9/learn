import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers';
import {applyMiddleware, createStore} from 'redux';
import App from "./App";
import Resources from './components/resources';
import requireAuth from './components/require_auth';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/resources" component={requireAuth(Resources)}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
