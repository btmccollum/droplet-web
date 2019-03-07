import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
  
      return (
        <React.Fragment>
          <Container>
            <Row className="d-flex justify-content-center w-100 h-100 align-items-center">
              <Col md={{ span: 8 }}>
                <Form onSubmit={this.handleOnSubmit} className="signup">
                <h1>Get started with Droplet!</h1>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleOnChange} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleOnChange} />
                  </Form.Group>

                  <Form.Group controlId="formPasswordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password_confirmation" value={password_confirmation} onChange={this.handleOnChange} />
                  </Form.Group>

                  <Button variant="primary" type="submit">Submit</Button>

                  <p><Link to='/login'>Log In</Link></p>
                </Form>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      )
    }
}
  
export default connect(null, { signupUser })(Signup);