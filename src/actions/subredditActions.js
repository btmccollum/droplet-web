import axios from 'axios';

// const baseUrl = 'https://localhost:3000/api/v1'
const baseUrl = 'https://droplet-app-api.herokuapp.com/api/v1'

export function fetchSubreddits() {
    let data = { 
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    };
    
    return dispatch => {
        dispatch({ type: "LOADING_SUBREDDITS" });
        return axios.get(`${baseUrl}/fetch_subreddits`, data)
            .then(response => {
                dispatch({ type: "FETCH_SUBREDDITS", payload: response.data.subreddits.data.children })
            })
    }
}