import React, { Component } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import Comments from '../../containers/Comments';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactHtmlParser from 'react-html-parser';


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
    const details = this.props.post;
    if (Object.keys(details.media_embed).length !== 0) {
      function htmlDecode(input){
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
      }
      
       return ReactHtmlParser(htmlDecode(details.media.oembed.html))
    } else if (details.preview !== undefined && details.preview.reddit_video_preview) {
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
    } else if (!!details.preview && details.media !== null && details.media.reddit_video !== undefined) {
      return (
        <ReactPlayer 
          url={details.media.reddit_video.fallback_url} 
          playing 
          loop
          config={{ 
            forceDASH: true,
            forceHLS: true 
          }}  
        />
      )
    } else if (!!details.selftext) {
      return <span>{details.selftext}</span>
    } else if (details.thumbnail === 'self') { 
      return <img src={process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'} />
    } else if (details.post_hint === 'image') {
      return <img src={details.url} />
    } else {
      return <a href={details.url}>{details.url}</a>
    }
  }

  findThumbnail = () => {
    const details = this.props.post;
    let thumbnail;

    if (details.thumbnail === 'self' || details.thumbnail === 'default') {
      thumbnail = process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'
    } 
    else if (details.thumbnail === "" && !details.secure_media.thumbnail_url) {
      thumbnail = details.secure_media.thumbnail_url
    }
    else {
      thumbnail = details.thumbnail
    }

    return ( <img className="postThumbnail" src={thumbnail} /> )
  }

  sumGildings = () => {
    const details = this.props.post;

    return Object.values(details.gildings).reduce((a,b) => a + b)
  }

  render() {
    const details = this.props.post;

    return (
      <React.Fragment>
        <Container>
          <Row className="postCol">
            <Col md={{ span: 9 }} >
              <Row className="postTitleAndCreds" onClick={this.handleShow}>
                  <Col className="bodyContainer">
                    <span className="postTitle">{details.title} <a href={details.url} className="ellipses" target="_blank" rel="noopener"><span>{details.url}</span><FontAwesomeIcon icon="external-link-alt" /></a></span><br/>
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
            <Modal.Body className="modalBody">
              <Comments post={details}/>  
            </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Post;