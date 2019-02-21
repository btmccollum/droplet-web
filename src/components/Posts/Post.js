import React from 'react'

const Post = props => {
    const details = props.post

    return (
        <div className="postContainer">
        <h2 className="postTitle">{details.title}</h2>
        <h5 className="postCreds"> Created by u/{details.author} </h5>

        <p className="postPreview"><img src={details.thumbnail} /></p>

        <p className="postCommentCount">Comments: {details.num_comments}</p>
        </div>
    )
}

export default Post;