import React, { Component } from "react";
import { Avatar } from "antd";
import "./HomeNavbar.css";

/**
 * Navbar for Home page and also for artist page
 */
class HomeNavbar extends Component {
  render() {
    return (
      <div className="NavLayout">
        <div className="main-nav">
          <li>
            <a href="/Home" className="previous-btn prev">
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
          </li>
          <li className="upgrade" style={{ marginRight: "0px" }}>
            <a href="/Premium" id="upgrade-icon">
              UPGRADE
            </a>
          </li>
          <li
            className="nav-item dropdown"
            style={{
              marginLeft: "16px",
            }}
          >
            <div className="dropdown">
              <button className="dropbtn">
                <Avatar src="./sultan.png" /> Username
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/account">Account</a>
                <a href="/login">Logout</a>
              </div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default HomeNavbar;
