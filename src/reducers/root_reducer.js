import { combineReducers } from 'redux';
import testReducer from './test_reducer';
import userReducer from './user_reducer';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
    test: testReducer,
    user: userReducer,
    posts: postsReducer
});

export default rootReducer;