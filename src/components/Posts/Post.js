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

  sumGildings = () => {
    const details = this.props.post

    return Object.values(details.gildings).reduce((a,b) => a + b)
  }

  render() {
    const details = this.props.post

    return (
      <React.Fragment>
        <Container>
          <Row className="postCol">
            <Col md={{ span: 9 }} >
              <Row className="postTitleAndCreds" onClick={this.handleShow}>
                  <Col className="bodyContainer">
                    <span className="postTitle">{details.title} <a href={details.url} className="ellipses" target="_blank"><span>{details.url}</span><FontAwesomeIcon icon="external-link-alt" /></a></span><br/>
                    <span className="postCreds"> {details.subreddit_name_prefixed} - Posted by u/{details.author}</span><br/>
                  </Col>
              </Row>
              
              <div className="postSpace">&nbsp;</div>
              <footer className="postFooter push">
                <span className="postCommentCount"><FontAwesomeIcon icon="comment-alt" /> {details.num_comments} </span>
                <span className="postUpvotes"><FontAwesomeIcon icon="arrow-alt-circle-up" /> {details.score} </span>
                <span className="postGilds"><FontAwesomeIcon icon="medal" /> {this.sumGildings()} </span>
              </footer>
            </Col>
              
            <Col className="imgContainer" md={{ span: 3}}>
              <p className="postPreview">{this.findThumbnail()}</p>
            </Col>
          </Row>
          
          </Container>

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