import React, { Component } from "react";
import { Avatar } from "antd";
import "./SearchNavbar.css";

/**
 * Navbar for Search pages
 */
class SearchNavbar extends Component {
  render() {
    return (
      <div className="NavLayout">
        <div className="main-nav">
          <li>
            <a
              href="/Home"
              className="previous-btn prev"
              style={{ marginLeft: "35px" }}
            >
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
          </li>
          <li className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  name=""
                  placeholder="Search for Artists, Songs, or Podcasts "
                />
                <i className="search_icon">
                  <i className="fas fa-search"></i>
                </i>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
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

export default SearchNavbar;
