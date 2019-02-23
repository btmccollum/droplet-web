import axios from 'axios';

const baseUrl = 'https://localhost:3000/api/v1'

export function fetchComments() {
    let data = { 
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    };
    
    return dispatch => {
        dispatch({ type: "LOADING_POSTS" });
        return axios.get(`${baseUrl}/fetch_comments`, data)
            .then(response => {
                debugger;
                // dispatch({ type: "FETCH_Comments", payload: response.data.posts.data.children })
            })
    }
}