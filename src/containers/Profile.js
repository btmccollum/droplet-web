import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { linkRedditAccount, authenticateUser } from '../actions/userActions';
import cuid from 'cuid';

class Profile extends Component {
  componentDidMount() {
    if (Object.keys(this.props.user.currentUser).length < 1) {
      this.props.authenticateUser()
    }
  }


  // buttonDisplay = () => {
  //   if (Object.keys(this.props.user.currentUser).length < 1) {
  //     return (
  //       <React.Fragment>
  //         <button disabled>Reddit Account Linked</button><br/>
  //       </React.Fragment>
  //     )
  //   }
  //   else {
  //     return (
  //       <React.Fragment>
  //         <button onClick={() => this.props.linkRedditAccount()}>Link My Reddit Account</button><br/>
  //       </React.Fragment>
  //     )
  //   }
  // }

  render() {
    const feeds = this.props.feed.map(subreddit => { return <li key={cuid()}>{subreddit}</li> });
    const user = this.props.user.currentUser;

    return (
      <React.Fragment>
            {/* {this.buttonDisplay} */}
            <button onClick={() => this.props.linkRedditAccount()}>Link My Reddit Account</button><br/>

            <h1>Profile:</h1>
            <p><img src={user.img} alt="user avatar"/></p>
            <span>Reddit Username: {user.username}</span><br/>
            <span>Email: {user.email}</span><br/>

            <h2>Custom Feed Subreddits:</h2>
            <ul>
              {feeds}
            </ul>

            <h2>Account Actions</h2>
            <button>Delete Account</button>
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
  linkRedditAccount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);