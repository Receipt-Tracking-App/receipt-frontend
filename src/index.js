import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App'
import { reducer } from './utils/reducer'

// Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store and use thunk
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

// render App with React Router and Redux
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
