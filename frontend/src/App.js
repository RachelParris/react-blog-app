import React, { Component } from 'react';
import {} from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
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

  render() {
    return (
      <div>
        <SignUp onSignUpSuccessful={this.onSignUpSuccessful} />
        <p>{JSON.stringify(this.state.user)}</p>
      </div>
    );
  }
}

export default App;
