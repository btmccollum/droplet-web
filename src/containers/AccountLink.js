import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { linkRedditAccount, authenticateUser, removeFromUserFeed } from '../actions/userActions';
import cuid from 'cuid';
import { Row, Col, Button } from 'react-bootstrap';

class AccountLink extends Component {
    render() {
        return (
        <React.Fragment>
            <Row className="d-flex justify-content-center w-100 h-100 align-items-center">
            <Col md={{ span: 8, offset: 4 }}>
                    <h1>Before you can get started!</h1>
                    <p>A valid Reddit account is required in order to use Droplet. Click the link below to provide permission for your current Reddit account or create a new account.</p>
                    
                    <Button variant="primary" onClick={() => this.props.linkRedditAccount()}>Link My Reddit Account</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountLink);