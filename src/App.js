import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/ButtonTest';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';


class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  
  componentDidMount(){
    let that = this
    axios.get('/users/check_for_user',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }
updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  callApi = async () => {
    const api_call = await fetch("https://localhost:3000/api/v1/login");
  
    const data = await api_call.json();
  
    this.setState({
      results: data
    });
  };

  render() {
    const loginButton = () => { return <button href="https://localhost:3000/api/v1/login">Log In</button> } 

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Route exact path="/" render={() => <button href="#" onClick={this.callApi}>Reddit Log In</button>} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
