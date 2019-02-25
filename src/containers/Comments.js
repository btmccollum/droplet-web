import React, { Component } from 'react';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentActions';
import Comment from '../components/Comment';

class Comments extends Component {
    componentDidMount() { 
        this.props.fetchComments(this.props.post);
    }

    componentDidUpdate() {
        this.loadComments()
    }
    
    loadComments = () => {
        if (this.props.comments.length > 0) {
            // return (<CommentList comments={this.props.comments}/>)
            return this.props.comments.map(comment => <Comment key={cuid()} details={comment} /> )
        }
        else {
            return (<span>Loading...</span> )
        }
    }


    render() {
        return (
            <div>
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

export default connect(mapStateToProps, { fetchComments })(Comments);