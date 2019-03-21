import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import { clearErrors } from '../actions/errorActions';
import { addToUserFeed, removeFromUserFeed } from '../actions/userActions';
import cuid from 'cuid';

class SubredditSearch extends Component {
    state = {
      query_string: ''
    }
    
  handleOnChange = event => {
    this.setState({ query_string: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    //capturing subreddit entry, sending it to action and clear local state
    const subreddit = this.state.query_string
    this.props.addToUserFeed(subreddit)
    this.setState({ query_string: '' })
  
    //reset the form field after submission
    event.target.reset()
  }

  handleErrors = () => {
    // error handling from Rails API 
    if (this.props.errors) { 
      return (
        this.props.errors.map(error => <li key={cuid()}>{error}</li>)
      )
    }
  }

  componentWillUnmount() {
    if (this.props.errors.length > 0) {
      clearErrors()
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={this.handleOnSubmit} className="justify-content-center">
            <FormControl type="text" placeholder="Subreddit Name..." className="mr-sm-2" onChange={this.handleOnChange} />
            <Button variant="primary" type="submit">Add To Feed</Button>
        </Form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.errors
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addToUserFeed, 
    removeFromUserFeed
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubredditSearch));