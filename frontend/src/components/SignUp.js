import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
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

    // Get the form data out of state
    axios.post('/users/signup', this.state)
      .then((res) => {
        console.log(res);
        this.props.onSignUpSuccessful(this.state);
      })
      .catch((err) => {
        console.log(err)
      });

    // refresh the form
    event.currentTarget.reset();
  }

  render() {
    const { username, firstname, lastname, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" 
            name="username"
            value={username}
            onChange={this.handleChange} />

            <label>First Name</label>
            <input type="text" 
              name="firstname"
              value={firstname}
              onChange={this.handleChange} />

            <label>Last Name</label>
            <input type="text" 
              name="lastname"
              value={lastname}
              onChange={this.handleChange} />

            <label>Email</label>
            <input type="text" 
              name="email"
              value={email}
              onChange={this.handleChange} />

            <label>Password</label>
            <input type="text" 
              name="password"
              value={password}
              onChange={this.handleChange} />
            
            <button type="submit">Join</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
/*
class App extends Component {

  }

  render() {
    
  }
}
*/