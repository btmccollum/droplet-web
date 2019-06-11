import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';
import { BrowserRouter as Router } from 'react-router-dom'
import { authenticateUser } from './actions/userActions';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        // for local testing only
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
        // necessary for heroku deployment or some computers encounter a loading error with the above
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

// ensuring we keep a 'logged in' user's information updated on refresh, if jwt token is present we re-authenticate on reload
const token = sessionStorage.getItem('jwt')

// dispatch authenticateUser to authenticate token with backend and re-updated users info in store
if (token) {
  store.dispatch(authenticateUser())
}

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>), document.getElementById('root'));
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
