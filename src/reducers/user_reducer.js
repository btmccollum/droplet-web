export default function userReducer(state = { currentUser: {}, feed: [] }, action) {
    switch(action.type) {
      case 'SET_USER':
        return { ...state, currentUser: action.payload }

      case 'LOGOUT_USER':
        return { ...state, currentUser: action.payload }

      case 'ADD_TO_USER_FEED':
        debugger;
        return { ...state, feed: [...action.payload]}

      case 'REMOVE_FROM_USER_FEED':
        // return { ...state, feed: [...action.payload]}
        return state;
      
      default: 
        return state;
    }
}