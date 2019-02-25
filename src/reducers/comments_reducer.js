function commentsReducer(state = { comments: [], loading: false }, action) {
    switch(action.type) {
        case "LOADING_COMMENTS":
            return { ...state, loading: true };

        case "FETCH_COMMENTS":
            return { loading: false, comments: action.payload };
            
        default:
            return state;
    }
}

export default commentsReducer;