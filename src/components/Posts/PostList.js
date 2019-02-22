import React, { Component } from 'react';
import Post from './Post';
import cuid from 'cuid';
import { Container } from 'react-bootstrap';

class PostList extends Component {
    render() {
        const postList = this.props.posts.map(post => { 
            return ( <Post key={cuid()} post={post.data} /> )
        });
        
        return (
            <Container>
                {postList}
            </Container>
        )
    }
}

export default PostList