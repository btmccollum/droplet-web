function commentsReducer(state = { comments: [], loading: false }, action) {
    switch(action.type) {
        case "LOADING_POSTS":
            return { ...state, loading: true };

        case "FETCH_POSTS":
            return { loading: false, comments: action.payload };
            
        default:
            return state;
    }
}

export default commentsReducer;