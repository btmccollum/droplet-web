import React from 'react';

const Comment = props => {
    const comment = props.details.data;

    return (
        <p>{comment.author}: {comment.body}</p>
    )
}

export default Comment;