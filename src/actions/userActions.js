import axios from 'axios';

// const baseUrl = 'https://localhost:3000/api/v1'
const baseUrl = 'https://droplet-app-api.herokuapp.com/api/v1'

const setHeaders = () => { return axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('jwt')}` };

// --------------- USER STATE ACTIONS ---------------

export const signupUser = (user, callback) => {
    const data = {
      body: JSON.stringify({ user })
    }
    axios.defaults.headers.common['Authorization'] = null;

    return dispatch => {
      dispatch({ type: "LOADING_USER_INFO"})
      axios.post(`${ baseUrl }/users`, data)
        .then(json => {
          sessionStorage.setItem('logged_in', 'true')
          sessionStorage.setItem('jwt', json.data.jwt)
          sessionStorage.setItem('preference_setting', json.data.preferences)

          dispatch({
            type: 'SET_USER',
            payload: json.data
          });
          callback()
        })
        .catch(error => {
          dispatch({ type: 'SHOW_ERROR', message: error.response.data.error })
        })
    }
}

export const loginUser = (user, callback) => {
  const data = {
    body: JSON.stringify({ user })
  }

  axios.defaults.headers.common['Authorization'] = null;

  return dispatch => {
    dispatch({ type: "LOADING_USER_INFO"})
    axios.post(`${ baseUrl }/auth`, data)
      .then(json => {
        sessionStorage.setItem('logged_in', 'true')
        sessionStorage.setItem('jwt', json.data.jwt)
        sessionStorage.setItem('preference_setting', json.data.preferences.id)
        
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: json.data
        })

        callback()
      })
      .catch(error => {
        dispatch({ type: 'SHOW_ERROR', message: error.response.data.error })
      })
  }
}

export const logoutUser = () => {
  axios.defaults.headers.common['Authorization'] = null;

  if (sessionStorage['jwt']) { 
    sessionStorage.removeItem('jwt') 
    sessionStorage.removeItem('preference_setting')
  }

  sessionStorage.removeItem('logged_in')
  
  return dispatch => {
    dispatch({ type: "LOADING_USER_INFO"})
    axios.post(`${baseUrl}/logout`)
      .then(resp => {
        dispatch({
          type: 'LOGOUT_USER',
          payload: ''
        })
      })
  .catch(error => {console.log(error.message)})
  }
}   

export const authenticateUser = () => {
  return dispatch => {
    setHeaders()
    dispatch({ type: "LOADING_USER_INFO"})
    axios.get(`${baseUrl}/load_user`)
      .then( json => {
        sessionStorage.setItem('preference_setting', json.data.preferences)
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: json.data
        })
      })
  }
}

export const deleteUser = id => {
  setHeaders();

  return dispatch => {
    dispatch({ type: "LOADING_USER_INFO"})
    axios.delete(`${baseUrl}/users/${id}`)
      .then( json => {
        sessionStorage.removeItem('jwt') 
        sessionStorage.removeItem('preference_setting') 
        sessionStorage.removeItem('logged_in')

        dispatch({
          type: 'DELETE_USER',
        })
      })
    .catch(error => {console.log(error.message)})
  }
}

// --------------- USER ACCOUNT ACTIONS ---------------

export const linkRedditAccount = () => {
  const data = { 
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
    }
  };

 return dispatch => {
    fetch(`${baseUrl}/link_oauth`, data)
      .then(resp => resp.json())
        .then(json => {
          window.location = `${json.url}${json.query_params}`
        })
        .catch(console.error)
  }
}

// --------------- USER FEED ACTIONS ---------------

export const addToUserFeed = subreddit => {
  const preference_setting_id = sessionStorage.getItem('preference_setting');
  const data = { body: JSON.stringify({ subreddit }) };

  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('jwt')}`;

  return dispatch => {
    dispatch({ type: "LOADING_USER_INFO"})
    axios.put(`${baseUrl}/preference_settings/${preference_setting_id}`, data)
      .then(resp => {
        dispatch({
          type: 'ADD_TO_USER_FEED',
          payload: resp.data.feed.subreddits
        })
      })
  }
}

export const removeFromUserFeed = subreddit => {
  const preference_setting_id = sessionStorage.getItem('preference_setting');
  const data = { body: JSON.stringify({ subreddit }) };

  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('jwt')}`;

  return dispatch => {
    dispatch({ type: "LOADING_USER_INFO"})
    axios.delete(`${baseUrl}/preference_settings/${preference_setting_id}`, { data: data })
      .then(resp => {
        dispatch({
          type: 'REMOVE_FROM_USER_FEED',
          payload: subreddit
        })
      })
  }
}