import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { linkRedditAccount, authenticateUser, removeFromUserFeed, deleteUser } from '../actions/userActions';
import cuid from 'cuid';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Profile extends Component {
  buttonDisplay = () => {
    
    if (this.props.user.currentUser.linked) {
      return <Button variant="primary" disabled>Reddit Account Linked</Button>
    }
    else {
      return ( 
        <React.Fragment>
          <h5>Important! A valid Reddit account must be linked in order to use Droplet.</h5>
          <Button variant="primary" onClick={() => this.props.linkRedditAccount()}>Link My Reddit Account</Button>
        </React.Fragment>
      )
    }
  }

  loadImg = () => {
    const user = this.props.user.currentUser;

    if (user.img) {
      return user.img
    } else {
      return process.env.PUBLIC_URL + '45332556-wassertropfen-umriss-symbol-modern-minimal-flache-design-stil-vektor-illustration.jpg'
    }
  }

  render() {
    const feeds = this.props.feed.map(subreddit => { 
      return ( 
        <li key={cuid()}>{subreddit} <Button variant="link" size="sm" onClick={() => this.props.removeFromUserFeed(subreddit)}>(Remove)</Button></li> 
      ) 
    });
    const user = this.props.user.currentUser;

    return (
      <React.Fragment>
        <Container className="h-100">
          <Row className="d-flex justify-content-center w-100 h-100 align-items-center">
            <Col md={{ span: 8, offset: 4 }}>
              <div className="profile">
                <p><img src={this.loadImg()} alt="user avatar"/></p>
                <span>Reddit Username: {user.username ? user.username : 'N/A'}</span><br/>
                <span>Email: {user.email}</span><br/>

                <h2>Your Droplet Feed:</h2>
                <ul>
                  {feeds}
                </ul>

                <h2>Account Actions</h2>
                {this.buttonDisplay()}

                {/* spacer */}
                <div>&nbsp;</div>

                <h5>Warning! The following action cannot be undone.</h5>
                <p><Button variant="danger" onClick={() => this.props.deleteUser(user.id)}>Delete Account</Button></p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        feed: state.user.feed  
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateUser,
  linkRedditAccount,
  removeFromUserFeed,
  deleteUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);