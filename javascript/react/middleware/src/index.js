import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reducers from './reducers';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import Async from './middleware/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
