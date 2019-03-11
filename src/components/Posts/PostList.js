import React from 'react';
import Post from './Post';
import cuid from 'cuid';
import { Container } from 'react-bootstrap';

// class PostList extends Component {
//     render() {
//         const postList = this.props.posts.map(post => { 
//             return ( <Post key={cuid()} post={post.data} /> )
//         });
        
//         return (
//             <Container>
//                 {postList}
//             </Container>
//         )
//     }
// }

const PostList = props => {
    const postList = props.posts.map(post => <Post key={cuid()} post={post.data} />);

    return (
        <Container className="postListing h-100">
            {postList}
        </Container>
    )
}

export default PostList
