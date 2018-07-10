import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/users/login', this.state)
      .then((res) => {
        console.log(res);
        this.props.onLoginSuccessful(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange} />
          <label>Password</label>
            <input 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />

          <button type="submit" className="btn">Login</button>
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </form>
      </div>
    );
  }
}

export default Login;