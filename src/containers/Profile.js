import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { linkRedditAccount, authenticateUser, removeFromUserFeed } from '../actions/userActions';
import cuid from 'cuid';
import { Row, Col, Button } from 'react-bootstrap';

class Profile extends Component {
  buttonDisplay = () => {
    if (Object.keys(this.props.user.currentUser).length > 0) {
      return <Button variant="primary" disabled>Reddit Account Linked</Button>
    }
    else {
      return <Button variant="primary" onClick={() => this.props.linkRedditAccount()}>Link My Reddit Account</Button>
    }
  }

  render() {
    const feeds = this.props.feed.map(subreddit => { return ( 
      <li key={cuid()}>{subreddit} <a href="#" onClick={() => this.props.removeFromUserFeed(subreddit)}>(Remove)</a></li> 
      ) 
    });
    const user = this.props.user.currentUser;

    return (
      <React.Fragment>
        <Row className="d-flex justify-content-center w-100 h-100 align-items-center">
          <Col md={{ span: 8, offset: 4 }}>
            <div className="profile">
              <p><img src={user.img} alt="user avatar"/></p>
              <span>Reddit Username: {user.username}</span><br/>
              <span>Email: {user.email}</span><br/>

              <h2>Your Droplet Feed:</h2>
              <ul>
                {feeds}
              </ul>

              <h2>Account Actions</h2>
              <p>{this.buttonDisplay()}</p>
              <h5>Warning! The follow action cannot be undone.</h5>
              <p><Button variant="danger">Delete Account</Button></p>
            </div>
          </Col>
        </Row>
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
  removeFromUserFeed
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);