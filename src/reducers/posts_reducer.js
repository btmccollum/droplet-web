function postsReducer(state = { posts: [], loading: false }, action) {
    switch(action.type) {
        case "LOADING_POSTS":
            return { ...state, loading: true };

        case "FETCH_POSTS":
            return { loading: false, posts: action.payload };
            
        default:
            return state;
    }
}

export default postsReducer;