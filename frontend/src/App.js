import React, { Component } from 'react';
import Home from './components/Home';
// import SignUp from './components/signup/SignUp';
// import Login from './components/login/Login';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  onSignUpSuccessful = (user) => {
    this.setState({user});
  }

  onLoginSuccessful = (user) => {
    this.setState({user});
  }

  render() {
    return (
      <div>
        <Home onSignUpSuccessful={this.onSignUpSuccessful} onLoginSuccessful={this.onLoginSuccessful} />
        <p>{JSON.stringify(this.state.user)}</p>
      </div>
    );
  }
}

export default App;
