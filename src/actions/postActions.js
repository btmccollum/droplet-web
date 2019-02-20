import axios from 'axios';
import { store } from '../index';

const baseUrl = 'https://localhost:3000/api/v1'

export function fetchPosts() {
    let test = store.getState();
    
    if (test.user.userless) {
        let appInfo = { userless: test.user.current_user };
        debugger;
        return dispatch => {
            dispatch({ type: "LOADING_POSTS" });
            return axios.get("https://localhost:3000/api/v1/fetch_posts", { headers: appInfo })
                .then(json => {
                    debugger;
                    dispatch({ type: "FETCH_POSTS", payload: json })
                })
        }
    }
}

// loadPosts = () => {
//     let that = this;
//     let header = {
//       'Authorization': `bearer ${that.props.currentUser.access_token}`,
//       'User-Agent': 'React:Droplet API/0.0.0 (TEST) by u/unovie' 
//     }
//     const api_call = async() => { await axios.get("https://oauth.reddit.com/r/games/top", { headers: header })
//       .then(function(json) {
//         debugger;
//         that.setState({
//           results: json
//         });
//     });
//     }
//     api_call()
// }

// const that = this;
//     const api_call = async() => { await axios.get("https://localhost:3000/api/v1/userless_auth")
//         .then(function(json) {
//           that.setState({
//             currentUser: json.data.currentUser
//           }, () => console.log(that.state.currentUser));
//         });
//       };

//     if (this.props.userless === false) {
//         api_call();
//     }
//   }