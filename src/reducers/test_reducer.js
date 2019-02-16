export default function test_reducer(state = { loading: false, test: [] }, action) {
    switch(action.type) {
        case "LOADING_TEST":
            return { ...state, loading: true};
        case "FETCH_TEST":
            return {loading: false, pictures: action.payload}; 
            
        default:
            return state;
    }
}
