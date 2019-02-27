import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, clearComments } from '../actions/commentActions';
import CommentList from '../components/Comments/CommentList';

class Comments extends Component {
    componentDidMount() { 
        this.props.fetchComments(this.props.post);
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    loadComments = () => {
        if (this.props.comments.length > 1) {
            return <CommentList comments={this.props.comments} />
        }
        else {
            return <span className="loadNotice">Loading...</span> 
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