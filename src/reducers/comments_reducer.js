function commentsReducer(state = { comments: [], loading: false }, action) {
    switch(action.type) {
        case "LOADING_COMMENTS":
            return { ...state, loading: true };

        case "FETCH_COMMENTS":
            return { ...state, loading: false, comments: action.payload };

        case "REMOVE_COMMENTS":
            return { ...state, comments: []}
            
        default:
            return state;
    }
}

export default commentsReducer;