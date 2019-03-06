import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/userActions';

class Login extends Component {
    state = {
      email: '',
      password: ''
    }
    
  handleOnChange = event => {
    const field = event.target.name
    let state = this.state

    state[field] = event.target.value
    this.setState(state)
  }

  onSubmit = event => {
    event.preventDefault()

    const user = this.state
    this.props.loginUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { email, password } = this.state

    return (
      <React.Fragment>
        <div className="login">
          <h1>Log In</h1>
          <form onSubmit={ this.onSubmit }>
            <input name="email" placeholder="Email" value={ email } onChange={ this.handleOnChange }/><br/>
            <input type='password' name="password" placeholder="Password" value={ password } onChange={ this.handleOnChange }/><br/>
            <button type="submit">Login</button>
          </form>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(null, mapDispatchToProps)(Login);