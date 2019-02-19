import axios from 'axios';

const baseUrl = 'https://localhost:3000/api/v1'

export const signupUser = (user, callback) => {
    return dispatch => {
      axios.post(`${ baseUrl }/users`, { user })
        .then(json => {
            debugger;
          dispatch({
            type: 'SET_USER',
            payload: json.data.current
          });
          callback()
        })
        .catch(err => err)
    }
  }
  