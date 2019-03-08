import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { linkRedditAccount, authenticateUser, removeFromUserFeed, deleteUser } from '../actions/userActions';
import cuid from 'cuid';
import { Row, Col, Button } from 'react-bootstrap';

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
              <p><img src={this.loadImg()} alt="user avatar"/></p>
              <span>Reddit Username: {user.username ? user.username : 'N/A'}</span><br/>
              <span>Email: {user.email}</span><br/>

              <p>Current ID is {user.id} !</p>
              <h2>Your Droplet Feed:</h2>
              <ul>
                {feeds}
              </ul>

              <h2>Account Actions</h2>
              {this.buttonDisplay()}
              <h5>Warning! The follow action cannot be undone.</h5>
              <p><Button variant="danger" onClick={() => this.props.deleteUser(user.id)}>Delete Account</Button></p>
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
  removeFromUserFeed,
  deleteUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);