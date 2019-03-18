import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, clearComments } from '../actions/commentActions';
import CommentList from '../components/Comments/CommentList';
import Loading from '../components/Loading'

class Comments extends Component {
    componentDidMount() { 
        // when mounted an action is fired off to load the comments of just the post being viewed
        this.props.fetchComments(this.props.post);
    }

    componentWillUnmount() {
        // sending action to clear comments from state when unmounted
        this.props.clearComments();
    }

    loadComments = () => {
        // conditional rendering based on comments load status
        if (this.props.comments.length > 1) {
            return <CommentList comments={this.props.comments} />
        }
        else {
            return <Loading />
        }
    }

    render() {
        return (
            <div className="modalCommentList">
                {this.loadComments()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps, { fetchComments, clearComments })(Comments);