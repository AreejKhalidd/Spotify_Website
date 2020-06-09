import React from "react";
import "./Sidebar.css";
import {CreatePlaylist} from "./CreatePlaylist";

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {createPlaylistShow : false}
  }
  
  render() {
    let createPlaylistClose = () => this.setState({createPlaylistShow : false});
    if (window.location.href === "http://localhost:3000/login") {
      return (
        <div className="side">
          <a href="/Home">
            <img
              className="logo"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
              alt="logo"
              width="auto"
              height="40"
            />
          </a>
          <a href="/" id="home-icon" className="fas fa-home">
            &nbsp;&nbsp;Home
          </a>
          <a href="/" id="search-icon" className="fas fa-search">
            &nbsp;&nbsp;Search
          </a>
          <a href="/" id="lib-icon" className="fas">
            &#xf025;&nbsp;&nbsp;Your Library
          </a>
        </div>
      );
    }
    return (
      <div className="side">
        <a href="/Home">
          <img
            className="logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="logo"
            width="auto"
            height="40"
          />
        </a>
        <a href="/Home" id="home-icon" className="fas fa-home">
          &nbsp;&nbsp;Home
        </a>
        <a href="/search" id="search-icon" className="fas fa-search">
          &nbsp;&nbsp;Search
        </a>
        <a href="/collection/playlists" id="lib-icon" className="fas">
          &#xf025;&nbsp;&nbsp;Your Library
        </a>
        <h6 className="text">PLAYLISTS</h6>
        {/**TODO: Add new playlists here */}
        <a
          onClick = {()=> this.setState({createPlaylistShow : true})}
          id="create-icon"
          className="fas fa-plus"
         
        >
          
          &nbsp;&nbsp;Create Playlist
        </a>
        <a href="/collection/tracks" id="liked-icon" className="fas fa-heart">
          &nbsp;&nbsp;Liked Songs
        </a>
        <CreatePlaylist
            show = {this.state.createPlaylistShow}
            onHide = {createPlaylistClose}
          />
      </div>
    );
  }
}
export default Sidebar;
