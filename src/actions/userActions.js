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
  let data = { 
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
    },
    jwt: sessionStorage.getItem('jwt') 
  }
  
  return dispatch => {
    axios.post(`${baseUrl}/logout`, data)
      .then(resp => {
        sessionStorage.setItem('logged_in', '')
        if (sessionStorage['jwt']) { sessionStorage.removeItem('jwt') }
        axios.defaults.headers.common['Authorization'] = null;

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