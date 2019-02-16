import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { queryString } from 'query-string'
import Signup from './containers/Signup';


class App extends Component {
  constructor(){
    super();
    this.state = {
      // currentUser: null,
      results: []
    }
    // this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  
  // componentDidMount(){
  //   let that = this
  //   axios.get('/users/check_for_user',{
  //   })
  //   .then(function(response){
  //     if(response.data.email){
  //       that.setState({
  //         currentUser: response.data.email
  //       })
  //     } else {
  //       that.setState({
  //         currentUser: null
  //       })
  //     }
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  // }
// updateCurrentUser(email) {
//     this.setState({
//       currentUser: email
//     })
//   }

  callApi = async () => {
    let that = this
    const api_call = await axios.get("https://localhost:3000/api/v1/login")
      .then(function(json) {
        that.setState({
          results: json
        })
      })
  
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          Signup Form:
          <Signup />

          Other Options:

          {/* <button href="/login">Sign Up</button> */}
          
          <Route path="/login" component={Signup} />
          <Route exact path="/" render={() => <button href="#" onClick={this.callApi}>Reddit Log In</button>} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
