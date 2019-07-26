import React from 'react';

function SignupForm(props) {
  return (
    <div>
      <h1>Create Your Account</h1>
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
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
