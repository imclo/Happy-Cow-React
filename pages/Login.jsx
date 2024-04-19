import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  return (
    <>
      <div className="signup-container">
        <h4>Login</h4>
        <form className="signup-form">
          <input className="email" type="email" placeholder="Email" />
          <input className="password" type="password" placeholder="Password" />
          <div>
            <input className="submit-connect" value="Log in" type="submit" />
          </div>
          <Link className="link" to="/signup">
            Don't have an account? Sign up here!
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
