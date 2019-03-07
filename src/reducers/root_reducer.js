import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import postsReducer from './posts_reducer';
import {reducer as burgerMenu} from 'redux-burger-menu';
import commentsReducer from './comments_reducer';
import subredditReducer from './subreddit_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    subreddits: subredditReducer,
    errors: errorsReducer,
    burgerMenu
});

export default rootReducer;