import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Post = props => {
    const details = props.post
    const pStyle = {
        backgroundColor: 'rgb(26, 26, 27)',
        maxHeight: '512 px', 
        margin: '0px auto'
    }

    return (
        <Row>
            <Col md={{ span: 8, offset: 2 }} className="postCol">
                <div className="postContainer">
                <h5 className="postTitle">{details.title}</h5>
                <Row>
                    <Col md={{ span: 10 }}><p className="postPreview"><img src={details.thumbnail} style={pStyle}/></p></Col>
                </Row>
                
                <Row>
                <Col md={{ span: 4 }}>
                <span className="postCommentCount">Comments: {details.num_comments}</span>
                </Col>
                <Col md={{ span: 8 }}>
                    <span className="postCreds"> Created by u/{details.author} </span>
                </Col>
                </Row>
                </div>
            </Col>
        </Row>
    )
}

export default Post;