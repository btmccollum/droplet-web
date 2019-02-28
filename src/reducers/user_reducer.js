export default function userReducer(state = { currentUser: {}, feed: [], loading: false }, action) {
    switch(action.type) {
      case 'LOADING_USER_INFO':
        return { ...state, loading: true }

      case 'SET_USER':
        return { ...state, currentUser: action.payload, loading: false }

      case 'LOGOUT_USER':
        return { ...state, currentUser: action.payload, loading: false }

      case 'ADD_TO_USER_FEED':
        debugger;
        return { ...state, feed: [...action.payload], loading: false}

      case 'REMOVE_FROM_USER_FEED':
        // return { ...state, feed: [...action.payload]}
        return state;

      case 'GET_USER_FEED':
        return { ...state, feed: [...action.payload], loading: false}

      case 'AUTHENTICATE_USER':
        return { ...state, currentUser: action.payload.user, feed: [...action.payload.feed], loading: false }
      
      default: 
        return state;
    }
}