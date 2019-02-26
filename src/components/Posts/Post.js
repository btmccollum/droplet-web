// import React from 'react'
import React, { Component } from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import Comments from '../../containers/Comments';
import { bindActionCreators } from 'redux';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

      determineContentToLoad = () => {
        const details = this.props.post
        
        if (details.preview !== undefined && details.preview.reddit_video_preview) {
          return (
            <ReactPlayer 
              url={details.preview.reddit_video_preview.fallback_url} 
              playing 
              loop
              config={{ 
                forceDASH: true,
                forceHLS: true 
              }}  
            />
          )
        } else if (details.thumbnail === 'self') { 
          return <img src={process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'} />
        } else {
          return <img src={details.url} />
        }
      }

      findThumbnail = () => {
        const details = this.props.post

        if (details.thumbnail === 'self' || details.thumbnail === 'default') {
          return <img className="postThumbnail" src={process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'} />
        } else {
          return <img className="postThumbnail" src={details.thumbnail} />
        }
      }
    
      render() {
        const details = this.props.post

        return (
          <React.Fragment>
            <Row>
                 <Col md={{ span: 10, offset: 1 }} className="postCol">
                     <div className="postContainer" onClick={this.handleShow}>
                     <Row className="postTitleAndCreds">
                         <Col className="bodyContainer" md={{ span: 10 }}>
                            <span className="postTitle">{details.title}</span><br/>
                            <span className="postCreds">Created by u/{details.author}</span><br/>
                            {/* <span className="postCommentCount">Comments: {details.num_comments}</span> */}
                         </Col>
                         
                         <Col className="imgContainer" md={{ span: 2}}>
                            <p className="postPreview">{this.findThumbnail()}</p>
                        </Col>
                     </Row>
                     <Row>
                        <Col className="postFooter">
                          <span className="postCommentCount"><FontAwesomeIcon icon="comment-alt" /> {details.num_comments}</span>
                        </Col>
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
                <Container>
                  <Row>
                    <Col className="modalTitle" md={{ span: 12 }}>
                      <Modal.Title><h5>{details.title}</h5></Modal.Title>
                    </Col>
                    <Col className="modalContent" md={{ span: 12 }}>
                      <p>{this.determineContentToLoad()}</p>
                    </Col>
                  </Row>
                  </Container>
                </Modal.Header>
                <Modal.Body>
                  <Comments post={details}/>  
                </Modal.Body>
            </Modal>
          </React.Fragment>
        )
      }
    }

export default Post;