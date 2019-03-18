import React, { Component } from 'react';
import Comment from './Comment';
import cuid from 'cuid';
import { Container } from 'react-bootstrap';

class CommentList extends Component {
    render() {
        // responsible for generating a comment component for each of the comments fetched
        const commentList = this.props.comments.map(comment => { 
            return ( <Comment key={cuid()} comment={comment.data} /> )
        });
        
        return (
            <Container className="commentList">
                {commentList}
            </Container>
        )
    }
}

export default CommentList;
