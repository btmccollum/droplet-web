import React, { Component } from 'react';
import Comment from './Comment';
import cuid from 'cuid';
import { Container } from 'react-bootstrap';

class CommentList extends Component {
    render() {
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
