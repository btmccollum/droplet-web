import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Signup from './containers/Signup';
import Posts from './containers/Posts';
import { logoutUser } from './actions/userActions';
import Login from './containers/Login';
import Home from './components/Home';
import Profile from './containers/Profile';
import SidebarMenu from './components/Menu';
import AccountLink from './containers/AccountLink';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { authenticateUser } from './actions/userActions';
import ErrorBoundary from './containers/ErrorBoundary';
import { faHome, faImages, faSignInAlt, faSignOutAlt, faUserPlus, faCommentAlt, faArrowAltCircleUp, faMedal, faExternalLinkAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faImages, faSignInAlt, faSignOutAlt, faUserPlus, faCommentAlt, faArrowAltCircleUp, faMedal, faExternalLinkAlt, faUserCircle)

class App extends Component {
  // if a user causes state to refresh while logged_in we will force the server to reidentify and set the correct user
  componentDidMount() {
    if (!!sessionStorage.getItem('logged_in') && Object.keys(this.props.currentUser).length < 1 ) {
      this.props.authenticateUser()
    }
  }
  
  showState = () => {
    console.log(this.props.currentUser)
  }

  render() {
    const linkedStatus = () => this.props.currentUser.linked ? true : false

    return (
      <div className="App">
        <SidebarMenu img={this.props.currentUser.img}/>
        <Switch>
        <ErrorBoundary>
            <Route exact path ="/" component={ 
              () => {
                if (loggedIn() && linkedStatus()) {
                  return <Home /> 
                } else if (loggedIn() && !linkedStatus()) {
                  return <Profile />
                } else {
                  return <Redirect to="/login"/> 
                }
              }
            }/>

            <Route path="/posts" component={
              () => {
                if (loggedIn() && linkedStatus()) {
                  return <Posts /> 
                } else if (loggedIn() && !linkedStatus()) {
                  return <Profile />
                } else {
                  return <Redirect to="/login"/> 
                }
              }
            }/>
        
            <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup /> }/>
            <Route path='/profile' component={ () => loggedIn() ? <Profile /> : <Login /> }/>
            <Route path='/link_account' component={ 
              () => {
                if (loggedIn() && linkedStatus()) {
                  return <Home /> 
                } else if (loggedIn() && !linkedStatus()) {
                  return <AccountLink />
                } else {
                  return <Redirect to="/login"/> 
                }
              }
            }/>
            
            <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login /> }/>
            <Route path='/logout' render={ props => { 
              this.props.logoutUser();
              return <Redirect to="/"/>  
            }} />
          </ErrorBoundary>
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

export default withRouter(connect(mapStateToProps, { logoutUser, authenticateUser })(App));