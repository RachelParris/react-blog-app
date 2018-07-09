import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    // Because the inputs are named to match their values in state, it's easier to update the state
    let { name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    // Get the form data out of state
    const { username, firstname, lastname, email, password } = this.state;

    axios.post('/users/signup', { username, firstname, lastname, email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    const { username, firstname, lastname, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" 
            name="username"
            valie={username}
            onChange={this.handleChange} />

            <label>First Name</label>
            <input type="text" 
              name="firstname"
              valie={firstname}
              onChange={this.handleChange} />

            <label>Last Name</label>
            <input type="text" 
              name="lastname"
              valie={lastname}
              onChange={this.handleChange} />

            <label>Email</label>
            <input type="text" 
              name="email"
              valie={email}
              onChange={this.handleChange} />

            <label>Password</label>
            <input type="text" 
              name="password"
              valie={password}
              onChange={this.handleChange} />
            
            <button type="submit">Join</button>
        </form>
      </div>
    );
  }
}

export default App;
