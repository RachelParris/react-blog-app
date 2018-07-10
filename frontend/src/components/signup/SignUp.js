import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

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
      <div className="parent-div">
        <h2>Create An Account With... </h2>
        <section className="signup-options">
          <button className="signup-options-btn">Google</button>
          <button className="signup-options-btn">Facebook</button>
          <button className="signup-options-btn">Twitter</button>
          <button className="signup-options-btn">Email</button>
        </section>
        <section className="form">
          <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              value={username}
              onChange={this.handleChange} />

              <label>First Name</label>
              <input 
                type="text" 
                name="firstname"
                value={firstname}
                onChange={this.handleChange} />

              <label>Last Name</label>
              <input 
                type="text" 
                name="lastname"
                value={lastname}
                onChange={this.handleChange} />

              <label>Email</label>
              <input 
                type="text" 
                name="email"
                value={email}
                onChange={this.handleChange} />

              <label>Password</label>
              <input 
                type="password" 
                name="password"
                value={password}
                onChange={this.handleChange} />
              
              <button type="submit" className="btn">Join</button>
              <p>Already have an account? <Link to='/login'>Sign In</Link></p>
          </form>
        </section>
      </div>
    );
  }
}

export default SignUp;
