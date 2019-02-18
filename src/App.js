import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';


class App extends Component {
  constructor(){
    super();
    this.state = {
      // currentUser: null,
      results: [],
      currentUser: null
    }
    // this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  
  componentDidMount(){
    const that = this;
    const api_call = async() => { await axios.get("https://localhost:3000/api/v1/userless_auth")
        .then(function(json) {
          that.setState({
            currentUser: json.data.currentUser
          }, () => console.log(that.state.currentUser));
        });
      };

    if (this.state.currentUser === null) {
        api_call();
    }
  }
  
  // updateCurrentUser(email) {
  //   this.setState({
  //     currentUser: email
  //   })
  // }

  callApi = async () => {
    let that = this
    const api_call = await axios.get("https://localhost:3000/api/v1/login")
      .then(function(json) {
        that.setState({
          results: json
        });
    });
  
    const results = that.state.results.data;
    // const data = await api_call.json();
  
    debugger;
    
    // <Redirect to={`${that.state.results.url}${that.state.results.query_params}`} />
    // <Route path='/authorize' component={() => { window.location = `www.google.com`}} />

    window.location.replace(`${results.url}${results.query_params}`)

    console.log('hi')
    // this.setState({
    //   results: data
    // });
  };

  render() {
    return (
      <Router>
      <div className="App">
        <Navbar>
          {/* <Navbar.Header> */}
            <Navbar.Brand>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </Navbar.Brand>
          {/* </Navbar.Header> */}
        </Navbar>
        <header className="App-header">
          <h1>Droplet</h1>
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
      </Router>
    );
  }
}

export default App;