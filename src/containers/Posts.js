import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostList from '../components/Posts/PostList';

const baseUrl = 'https://localhost:3000/api/v1';

class Posts extends Component {

    componentDidMount() { 
        this.props.fetchPosts();
    }

    componentDidUpdate() {
        this.loadPosts()
    }

    loadPosts = () => {
        if (this.props.posts.length > 0) {
            return (<PostList posts={this.props.posts}/>)
        }
        else {
            return (<span>Loading...</span> )
        }
    }

    render() {
        return (
            <div className="postListContainer">
                {this.loadPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);