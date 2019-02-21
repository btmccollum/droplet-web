import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const baseUrl = 'https://localhost:3000/api/v1';

class Posts extends Component {

    componentDidMount() { 
        this.props.fetchPosts();
    }

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