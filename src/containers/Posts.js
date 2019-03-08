import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostList from '../components/Posts/PostList';
import Loading from '../components/Loading';
import { Container, Row, Col, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';

class Posts extends Component {
    componentDidMount() { 
        this.props.fetchPosts(this.props.feed);
    }

    componentDidUpdate() {
        this.loadPosts()
    }

    loadPosts = () => {
        if (this.props.posts.length > 0) {
            return (<PostList posts={this.props.posts}/>)
        }
        else {
            return <Loading />
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container className="postListContainer h-100">
                    {this.loadPosts()}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        feed: state.user.feed
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);