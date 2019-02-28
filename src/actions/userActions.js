import axios from 'axios';

const baseUrl = 'https://localhost:3000/api/v1'

axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('jwt')}`;

export const signupUser = (user, callback) => {
    const data = {
      body: JSON.stringify({ user })
    }
    axios.defaults.headers.common['Authorization'] = null;

    return dispatch => {
      axios.post(`${ baseUrl }/users`, data)
        .then(json => {
          debugger;
          sessionStorage.setItem('logged_in', 'true')
          sessionStorage.setItem('jwt', json.data.jwt)
          sessionStorage.setItem('preference_setting', json.data.preferences)

          dispatch({
            type: 'SET_USER',
            payload: json.data
          });
          callback()
        })
        .catch(err => err)
    }
}

export const loginUser = (user, callback) => {
  const data = {
    body: JSON.stringify({ user })
  }

  return dispatch => {
    axios.post(`${ baseUrl }/auth`, data)
      .then(user => {
        debugger;
        sessionStorage.setItem('logged_in', 'true')
        sessionStorage.setItem('jwt', user.data.jwt)
        sessionStorage.setItem('preference_setting', user.data.preference_setting)
        
        dispatch({
          type: 'SET_USER',
          payload: user.data.current
        })

        callback()
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

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

export const logoutUser = () => {
  axios.defaults.headers.common['Authorization'] = null;

  if (sessionStorage['jwt']) { 
    sessionStorage.removeItem('jwt') 
    sessionStorage.removeItem('preference_setting')
  }

  sessionStorage.removeItem('logged_in')
  
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

export const authenticateUser = () => {
  return dispatch => {
    dispatch({ type: "LOADING_USER_INFO"})
    axios.get(`${baseUrl}/load_user`)
      .then( resp => {
        dispatch({
          type: 'AUTHENTICATE_USER',
          payload: resp.data
        })
      })
  }
}

export const addToUserFeed = subreddit => {
  const preference_setting_id = sessionStorage.getItem('preference_setting');
  const data = { body: JSON.stringify({ subreddit }) };

  return dispatch => {
    axios.put(`${baseUrl}/preference_settings/${preference_setting_id}`, data)
      .then(resp => {
        debugger;
        dispatch({
          type: 'ADD_TO_USER_FEED',
          payload: resp.data.feed.subreddits
        })
      })
  }
}

export const getUserFeed = () => {
  const preference_setting_id = sessionStorage.getItem('preference_setting');

  return dispatch => {
    // axios.get(`${baseUrl}/preference_settings/${preference_setting_id}`)
    // .then(resp => {})
    dispatch({ type: "LOADING_USER_INFO" });
    fetch(`${baseUrl}/preference_settings/${preference_setting_id}`)
      .then(resp => resp.json())
        .then(data => {
          debugger;
          // dispatch({
          //   type: 'GET_USER_FEED'
          //   payload: data
          // })
        })
  }
}