import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SignupForm from './Users/SignupForm';
import LoginForm from './Users/LoginForm';
import axiosAuth from './Users/axiosAuth';
import DadJokeList from './DadJokes/DadjokesList';

class App extends Component {
  state = {
    isloggedIn: false,
    username: '',
    password: '',
    dadJokes: ''
  };

  onChangeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createuserWithAxios = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post('http://localhost:3300/api/register', user)
      .then(response => {
        console.log(response);
        this.setState({
          username: '',
          password: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  loginUserWithAxios = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post('http://localhost:3300/api/login', user)
      .then(response => {
        console.log(response);
        localStorage.storage.setItem('token', response.data.token);
        this.props.history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.dadJokes)
    return (
      <div>
        <SignupForm
          onChange={this.onChangeHandler}
          username={this.state.username}
          password={this.state.password}
          onSubmit={this.createuserWithAxios}
        />

        <LoginForm
          username={this.state.username}
          password={this.state.password}
          onSubmit={this.loginUserWithAxios}
          onChange={this.onChangeHandler}
        />
        <DadJokeList jokes={this.dadJokes} />
      </div>
    );
  }
}

export default App;
