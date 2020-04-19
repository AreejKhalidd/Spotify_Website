import React, { Component } from "react";
import "./LoginNavbar.css";

/**
 * Navbar contains signup and login buttons after user logout
 */
class LoginNavbar extends Component {
  render() {
    return (
      <div className="NavLayout">
        <ul className="main-nav">
          {/* <li>
            <a href="/Home" className="previous-btn prev">
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
          </li> */}
          <li style={{ marginLeft: "auto", marginRight: "6px" }}>
            <a href="/signup" id="signUp-icon">
              SIGN UP
            </a>
          </li>
          <li style={{ marginRight: "16px" }}>
            <a href="/" id="login-icon">
              LOG IN
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginNavbar;
