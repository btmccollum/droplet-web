import React from 'react';

const Comment = props => {
    const comment = props.comment;

    return (
        <p>{comment.author}: {comment.body}</p>
    )
}

export default Comment;