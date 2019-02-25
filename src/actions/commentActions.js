import axios from 'axios';

const baseUrl = 'https://localhost:3000/api/v1'

export function fetchComments(post) {
    let data = { 
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        },
        params: JSON.stringify({
            'subreddit': post.subreddit,
            'id': post.id
        })
    };
    
    return dispatch => {
        dispatch({ type: "LOADING_COMMENTS" });
        return axios.get(`${baseUrl}/fetch_comments`, data)
            .then(response => {
                dispatch({ type: "FETCH_COMMENTS", payload: response.data.comments[1].data.children })
            })
    }
}