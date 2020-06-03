import React, { Component } from "react";
import DiscoverCardList from "./DiscoverCardList";
import "./Library.css";
class Library extends Component {
  constructor() {
    super();
    this.state = {
      cardData: "",
    };
  }

  componentDidMount() {
    let url = "http://localhost:8080/Albums?q=123";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ cardData: data }));
  }
  render() {
    console.warn(this.state.cardData);
    if (this.state.cardData.length == 0) {
      return (
        <div className="playlists-page">
          <i id="playlists" className="fas" style={{ fontSize: "70px" }}>
            &#xf025;
          </i>
          <h1 id="playlists1">Create your first playlists</h1>
          <h6 id="playlists2">
            We’ll help you make the perfect mixtape, minus the tape.
          </h6>
          <a href="http://localhost:3000/browse/discover" id="playlists-icon">
            CREATE NEW PLAYLIST
          </a>
        </div>
      );
    }
    return (
      <div className="playlists-page">
        <DiscoverCardList Cards={this.state.cardData} />{" "}
      </div>
    );
  }
}
export default Library;
