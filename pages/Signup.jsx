import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <h4>Sign Up</h4>
        <form className="signup-form">
          <input className="username" type="text" placeholder="Username" />
          <input className="email" type="text" placeholder="Email" />
          <input className="password" type="password" placeholder="Password" />
          <div>
            <input className="submit-connect" value="Next" type="submit" />
          </div>
          <Link className="link" to="/login">
            Already an account? Login!
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
