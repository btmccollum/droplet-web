import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import postsReducer from './posts_reducer';
import {reducer as burgerMenu} from 'redux-burger-menu';

const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
    burgerMenu
});

export default rootReducer;