export default function userReducer(state = { currentUser: {} }, action) {
    switch(action.type) {
      case 'SET_USER':
        return { ...state, currentUser: action.payload }

      case 'LOGOUT_USER':
        return { ...state, currentUser: action.payload }

      default: 
        return state;
    }
}