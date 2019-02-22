import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Signup from './containers/Signup';
import Posts from './containers/Posts';
import { logoutUser } from './actions/userActions';
import Login from './containers/Login';
import Home from './components/Home';
import SidebarMenu from './components/Menu';

// Self executing function to ensure jwt is included in all axios requests when defined for auth on API
(function() {
  let token = sessionStorage.getItem('jwt');
  if (token) {
    console.log('set token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } 
  else {
    console.log('null token')
      axios.defaults.headers.common['Authorization'] = null;
  }
}());

class App extends Component {

  showState = () => {
    console.log(this.props.currentUser)
  }

  postFetch = () => {
    const baseUrl = 'https://localhost:3000/api/v1'
    let data = { 
      credentials: 'include', 
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
      },
      jwt: sessionStorage.getItem('jwt')
    }
    axios.get(`${baseUrl}/post_test`, data)
    .then(resp => {
      console.log(resp)
    })
  }

  linkRedditAccount = () => {
    const baseUrl = 'https://localhost:3000/api/v1' 
    let data = { 
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
      }
    }

    axios.get(`${baseUrl}/link_oauth`, data)
    .then(resp => {
      debugger;
      console.log(resp)
      window.location = `${resp.data.url}${resp.data.query_params}`
    })
    
  }

  render() {
    return (
      <div className="App">
        <SidebarMenu />
        <button onClick={() => console.log(sessionStorage.getItem('jwt'))}>Log JWT</button><br/>
        <button onClick={this.postFetch}>Passing JWT Test</button><br/>
        <button onClick={this.linkRedditAccount}>Link My Reddit Account</button><br/>
        <span>Current User is {this.props.currentUser.email}</span><br/>
        <Switch>
            <Route exact path ="/" component={ () => loggedIn() ? <Home /> : <Redirect to="/login"/> }/>
            <Route path = "/posts" component={ Posts } />
            <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup /> }/>
            <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login /> }/>
            <Route path='/logout' render={ props => { 
              this.props.logoutUser();
              return <Redirect to="/"/>  
            }} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const loggedIn = () => !!sessionStorage['logged_in'];

export default withRouter(connect(mapStateToProps, { logoutUser })(App));