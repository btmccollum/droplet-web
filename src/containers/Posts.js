import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchPosts } from '../actions/postActions';


class Posts extends Component {

    

    render() {
        return (
            <div>
                <button onClick={this.props.fetchPosts}>Load Top Games Posts</button>
                Hi
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);