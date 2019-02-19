export default function userReducer(state = { currentUser: {}, userless: true }, action) {
    switch(action.type) {
      case 'SET_USER':
        debugger;
        return { ...state, currentUser: action.payload, userless: false }
      default: 
        return state;
    }
}