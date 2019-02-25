import axios from 'axios';

const baseUrl = 'https://localhost:3000/api/v1'

export const signupUser = (user, callback) => {
    let data = {
      // credentials: 'include',
      body: JSON.stringify({ user })
    }

    return dispatch => {
      axios.post(`${ baseUrl }/users`, data)
        .then(json => {
          sessionStorage.setItem('logged_in', 'true')
          sessionStorage.setItem('jwt', json.data.jwt)
          dispatch({
            type: 'SET_USER',
            payload: json.data.current
          });
          callback()
        })
        .catch(err => err)
    }
}

export const loginUser = (user, callback) => {
  let data = {
    body: JSON.stringify({ user })
  }

  return dispatch => {
    axios.post(`${ baseUrl }/auth`, data)
      .then(user => {
        debugger;
        sessionStorage.setItem('logged_in', 'true')
        sessionStorage.setItem('jwt', user.data.jwt)

        dispatch({
          type: 'SET_USER',
          payload: user.data
        })

        callback()
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

export const logoutUser = () => {
  axios.defaults.headers.common['Authorization'] = null;

  if (sessionStorage['jwt']) { sessionStorage.removeItem('jwt') }

  sessionStorage.setItem('logged_in', '')
  
  return dispatch => {
    axios.post(`${baseUrl}/logout`)
      .then(resp => {
        dispatch({
          type: 'LOGOUT_USER',
          payload: ''
        })
      })
  .catch(error => {
    console.log(error.message);
  })
  }
}   