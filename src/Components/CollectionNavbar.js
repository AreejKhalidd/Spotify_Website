import React, { Component } from "react";
import NotificationButton from "./NotificationButton";
import { Avatar } from "antd";
import "./CollectionNavbar.css";

/**
 * Navbar for collection page (playlist, podacst, albums, artist)
 * and it appears in account profile aslo
 */
class CollectionNavbar extends Component {
  render() {
    return (
      <div className="NavLayout">
        <ul className="main-nav">
          <li>
            <a href="/Home" className="previous-btn prev">
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
            <a href="/collection/playlists" id="playlist-icon">
              Playlists
            </a>
          </li>
          <li>
            <a href="/collection/podcasts" id="prodcast-icon">
              Podcasts
            </a>
          </li>
          <li>
            <a href="/collection/artists" id="artists-icon">
              Artists
            </a>
          </li>
          <li>
            <a href="/collection/albums" id="albums-icon">
              Albums
            </a>
          </li>
          <NotificationButton />
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
        </ul>
      </div>
    );
  }
}

export default CollectionNavbar;
