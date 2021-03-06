import axios from 'axios';

// const baseUrl = 'https://localhost:3000/api/v1'
const baseUrl = 'https://droplet-app-api.herokuapp.com/api/v1'

export function fetchComments(post) {
    let data = { 
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        },
        params: JSON.stringify({
            'path': post.permalink,
        })
    };
    
    return dispatch => {
        // updating load status while async action executes
        dispatch({ type: "LOADING_COMMENTS" });
        
        return axios.get(`${baseUrl}/fetch_comments`, data)
            .then(response => {
                dispatch({ type: "FETCH_COMMENTS", payload: response.data.comments[1].data.children })
            })
    }
}

export function clearComments() {
    return dispatch => {
        dispatch({ type: "REMOVE_COMMENTS" })
    }
}