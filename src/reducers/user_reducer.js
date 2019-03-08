export default function userReducer(state = { currentUser: {}, feed: [], loading: false }, action) {
    switch(action.type) {
      case 'LOADING_USER_INFO':
        return { ...state, loading: true }

      case 'SET_USER':
      debugger;
        return { ...state, currentUser: action.payload, loading: false }

      case 'LOGOUT_USER':
        return { ...state, currentUser: action.payload, loading: false }

      case 'ADD_TO_USER_FEED':
        return { ...state, feed: [...action.payload], loading: false}

      case 'REMOVE_FROM_USER_FEED':
        return { ...state, feed: [...state.feed.filter(el => el !== action.payload)]}

      case 'GET_USER_FEED':
        return { ...state, feed: [...action.payload], loading: false}

      case 'AUTHENTICATE_USER':
      debugger;
        const user = action.payload;
        return { ...state, currentUser: user.current, feed: [...user.preferences.subreddits], loading: false }

      default: 
        return state;
    }
}