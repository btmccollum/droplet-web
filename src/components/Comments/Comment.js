import React from 'react';

const Comment = props => {
    const comment = props.comment;

    return (
        <p><strong>{comment.author}</strong>: {comment.body}</p>
    )
}

export default Comment;