function subredditReducer(state = { subreddits: [], loading: false }, action) {
    switch(action.type) {
        case "LOADING_SUBREDDITS":
            return { ...state, loading: true };

        case "FETCH_SUBREDDITS":
            return { ...state, loading: false, subreddits: action.payload };
            
        default:
            return state;
    }
}

export default subredditReducer;