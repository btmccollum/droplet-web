import axios from 'axios';

// const baseUrl = 'https://localhost:3000/api/v1'
const baseUrl = 'https://droplet-app-api.herokuapp.com/api/v1'

export function fetchPosts(subreddits = null) {
    let data = { 
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        },
        params: JSON.stringify({ subreddits })
    };
  
    return dispatch => {
        // updating load status while async action executes
        dispatch({ type: "LOADING_POSTS" });

        return axios.get(`${baseUrl}/fetch_posts`, data)
            .then(response => {
                dispatch({ type: "FETCH_POSTS", payload: response.data.posts.data.children })
            })
    }
}