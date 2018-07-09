import React, { Component } from 'react';
import SignUp from './components/SignUp';
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
