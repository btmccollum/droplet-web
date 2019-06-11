import React, { Component } from 'react'
import { Modal, Container, Row, Col } from 'react-bootstrap'
import Comments from '../../containers/Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactHtmlParser from 'react-html-parser'
import ResponsivePlayer from '../ResponsivePlayer'

function htmlDecode(input){
  var doc = new DOMParser().parseFromString(input, "text/html")
  return doc.documentElement.textContent
}

class Post extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
    }
  }
    
  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  // Reddit API can return many inconsistent types of data, using multiple if statements to account for them
  determineContentToLoad = () => {
    const details = this.props.post
    if (details.media !== null) {
        if (details.media.reddit_video) {
          return ( 
            <ResponsivePlayer url={details.media.reddit_video.fallback_url} loopSetting="true" />
          )
        } else if (details.secure_media_embed) {
    
            if (details.domain === "gfycat.com") {
        
              return (
                <ResponsivePlayer url={details.preview.reddit_video_preview.fallback_url} loopSetting="true" />
              )
            } else {
              return (
                <ResponsivePlayer url={details.url} loopSetting="true" />  
              )
            }
        } else {
          return (
            <ResponsivePlayer url={details.media.reddit_video.fallback_url} loopSetting="false" />
          )
        }
    } else if (details.preview !== undefined && details.preview.reddit_video_preview) {
        return (
          <ResponsivePlayer url={details.preview.reddit_video_preview.fallback_url} loopSetting="true" />
        )
    } else if (!!details.preview && details.media !== null && details.media.reddit_video !== undefined) {
        return (
          <ResponsivePlayer url={details.media.reddit_video.fallback_url} />
        )
    } else if (!!details.selftext) {
      return ReactHtmlParser(htmlDecode(details.selftext_html))
    } else if (details.post_hint === 'image') {
      return <img src={details.url} alt="main content" />
    } else {
      return(
        <a className="dynamicModalContent" href={details.url}>{details.url}</a>
      ) 
    }
  }

  findThumbnail = () => {
    const details = this.props.post
    let thumbnail

    if (details.thumbnail === 'self' || details.thumbnail === 'default') {
      thumbnail = process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'
    } 
    else if (details.thumbnail === "" && details.secure_media === null) {
      thumbnail = process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'
    }
    else if (details.thumbnail === "" && !!details.secure_media.oembed.thumbnail_url) {
      thumbnail = details.secure_media.oembed.thumbnail_url
    }
    else if (details.thumbnail === "" && !!details.secure_media.thumbnail_url) {
      thumbnail = details.secure_media.thumbnail_url
    }
    else if (details.thumbnail === "") {
      thumbnail = process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'
    }
    else {
      thumbnail = details.thumbnail
    }

    return ( <img className="postThumbnail" src={thumbnail} alt="post thumbnail" /> )
  }

  sumGildings = () => {
    const details = this.props.post

    if (details.total_awards_received > 0) {
      return Object.values(details.gildings).reduce((a,b) => a + b)
    } else {
      return 0
    }
  }

  render() {
    const details = this.props.post

    return (
      <React.Fragment>
        <Container onClick={this.handleShow}>
          <Row className="postCol">
            <Col md={{ span: 9 }} >
              <Row className="postTitleAndCreds">
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

        {/* Handling display for modal, launched when clicked by user and handles comments for each post when mounted */}
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
                  <Modal.Title>
                    {details.title}
                  </Modal.Title>
                </Col>
                <Col className="modalContent" md={{ span: 12 }}>
                  {this.determineContentToLoad()}
                  <span className="postSubtitle">{details.score} points - Posted by {details.author} in {details.subreddit_name_prefixed}</span>
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

export default Post