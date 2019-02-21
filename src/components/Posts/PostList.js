import React, { Component } from 'react';
import Post from './Post';
import cuid from 'cuid';

class PostList extends Component {
    render() {
        const postList = this.props.posts.map(post => { 
            return ( <Post key={cuid()} post={post.data} /> )
        });
        
        return (
            <div>
                {postList}
            </div>
        )
    }
}

export default PostList
