import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducer from './reducers';

const store = createStore(reducer);
ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'),
);
