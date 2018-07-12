import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
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

  onLoginSuccessful = (user) => {
    this.setState({user});
  }

  render() {
    console.log(this.context.history);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home user={this.state.user}/> }/>
          <Route path="/signup" render={() => <SignUp onSignUpSuccessful={this.onSignUpSuccessful} />} />
          <Route path="/login" render={() => <Login onLoginSuccessful={this.onLoginSuccessful} />} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
