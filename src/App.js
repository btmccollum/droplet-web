import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarDisplay from './components/NavbarDisplay';
import Signup from './containers/Signup';

class App extends Component {
  componentDidMount(){
    const that = this;
    const api_call = async() => { await axios.get("https://localhost:3000/api/v1/userless_auth")
        .then(function(json) {
          that.setState({
            currentUser: json.data.currentUser
          }, () => console.log(that.state.currentUser));
        });
      };

    if (this.props.userless === true) {
        api_call();
    }
  }

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
  };

  showState = () => {
    console.log(this.props.currentUser)
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavbarDisplay />
        </nav>
        <header className="App-header">
          <h1>Droplet</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <button onClick={this.showState}>Show</button>
          
        </header>
        
        <div className="js-Content">
          <Switch>
              <Route path = "/signup" component={ Signup } />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    userless: state.user.userless
  }
}

export default connect(mapStateToProps)(App);