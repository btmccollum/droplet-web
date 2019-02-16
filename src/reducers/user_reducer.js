export default function userReducer(state = { current: {} }, action) {
    switch(action.type) {
      case 'SET_USER':
        return { ...state, current: action.payload }
      default: return state
    }
}