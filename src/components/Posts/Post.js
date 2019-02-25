// import React from 'react'
import React, { Component } from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import Comments from '../../containers/Comments';
import { bindActionCreators } from 'redux';

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

      // determineContentToLoad = () => {
      //   const details = this.props.post
      //   debugger;
      //   if (details.preview !== undefined && details.preview.reddit_video_preview) {
      //     return <img src={details.preview.images[0].source.url} />
      //   }
      //   else if (details !== undefined && details.url !== undefined ) {
      //     return <img src={details.url} />
      //   }
      //   else {
      //     return 'hi'
      //   }
      // }
    
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
                  <img src="https://gfycat.com/acrobaticcheerfulhind" />
                  {/* {this.determineContentToLoad()} */}
                  <Comments post={details}/>  
                </Modal.Body>
            </Modal>
          </React.Fragment>
        )
      }
    }

export default Post;