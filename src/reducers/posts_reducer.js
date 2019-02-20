function postsReducer(state = { posts: [], loading: false }, action) {
    switch(action.type) {
        case "LOADING_POSTS":
        debugger;
            return { ...state, loading: true };

        case "FETCH_POSTS":
            debugger;
            return { loading: false, posts: [action.payload] };
            
        default:
            return state;
    }
}

export default postsReducer;