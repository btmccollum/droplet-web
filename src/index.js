import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Signup from './containers/Signup';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <Route exact path = "/" component={ App } />
                <Route path = "/signup" component={ Signup } />
            </React.Fragment>
        </Router>
    </Provider>), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
