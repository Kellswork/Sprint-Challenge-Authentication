import React from 'react';

function LoginForm(props) {
  return (
    <div>
      <h1>Welcome Back</h1>
      <form onSubmit={props.onSubmit}>
        <div className="input-group" />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={props.onChange}
        />
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={props.onChange}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
