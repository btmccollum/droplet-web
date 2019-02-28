import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { linkRedditAccount, authenticateUser } from '../actions/userActions';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
            <button onClick={() => this.props.linkRedditAccount()}>Link My Reddit Account</button><br/>
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