// import React from 'react'
import React, { Component } from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import Comments from '../../containers/Comments';

class Post extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        const details = this.props.post

        return (
          <React.Fragment>
            <Row>
                 <Col md={{ span: 10, offset: 1 }} className="postCol">
                     <div className="postContainer" onClick={this.handleShow}>
                     <Row className="postTitleAndCreds">
                         <Col className="bodyContainer">
                            <span className="postTitle">{details.title}</span><br/>
                            <span className="postCreds">Created by u/{details.author}</span><br/>
                         </Col>
                         <Col className="imgContainer">
                            <p className="postPreview"><img src={details.thumbnail} /></p>
                        </Col>
                     </Row>
                     <Row>
                        <span className="postCommentCount">Comments: {details.num_comments}</span>
                     </Row>
                     </div>
                 </Col>
             </Row>

            <Modal 
                show={this.state.show} 
                onHide={this.handleClose}
                dialogClassName="modal-90w"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{details.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src={details.url} />
                  <Comments post={details}/>  
                </Modal.Body>
            </Modal>
          </React.Fragment>
        )
      }
    }

export default Post;