import logo from "../src/assets/img/HappyCow_Logo.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img className="header-logo" src={logo} alt="happy-cow-logo" />
      </Link>
      <div className="header-button-log-sign">
        <Link to="/signup">
          <button className="signup">Sign up</button>
        </Link>
        <Link to="/login">
          <button className="login">Log in</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
