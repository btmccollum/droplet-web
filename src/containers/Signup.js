import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/userActions';
import { Link } from 'react-router-dom';

class Signup extends Component {
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
  
    handleOnSubmit = event => {
      event.preventDefault()
      const user = this.state
      this.props.signupUser(user, () => this.props.history.push('/'))
    }
  
    render() {
      const { email, password, password_confirmation } = this.state
      let test = sessionStorage.getItem('jwt')
  
      return (
        <React.Fragment>
          <div className="signup">
            <h1>Sign Up</h1>
            <button onClick={console.log(test)}>JWT</button>
            <form onSubmit={ this.handleOnSubmit }>
              <input name="email" placeholder="Email" value={ email } onChange={ this.handleOnChange }/><br/>
              <input type='password' name="password" placeholder="Password" value={ password } onChange={ this.handleOnChange }/><br/>
              <input type='password' name="password_confirmation" placeholder="Password Confirmation" value={ password_confirmation } onChange={ this.onChange }/><br/>
              <button type="submit">Signup</button>
            </form>
            <Link to='/login'>Log In</Link>
          </div>
        </React.Fragment>
      )
    }
}
  
export default connect(null, { signupUser })(Signup);