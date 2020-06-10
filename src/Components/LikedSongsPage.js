import React, { Component } from "react";
import "./LikedSongsPage.css";
import LikedSongList from "./LikedSongList";

/**
 *
 * @property {class} LikedSongsPage - Liked Songs page that contains List of songs
 * @param {}
 * @returns {}
 */
class LikedSongsPage extends Component {
  constructor() {
    super();
    this.state = {
      Songs: [],
    };
  }

  /**
   *
   * @property {Function} componentDidMount - fetch songs data from a fake server
   * @param {}
   * @returns {}
   */
  componentDidMount() {
    fetch("http://localhost:8080/likedSong")
      .then((response) => response.json())
      .then((users) => this.setState({ Songs: users }));
  }

  /**
   * @property {Function} render - renders liked songs fetched from a fake server
   * @param {}
   * @returns {} div contains all songs fetched from a fake server
   */
  render() {
    console.warn("HAHAHAHAHAHAHAH", this.state.Songs);
    if (this.state.Songs.length !== 0) {
      return (
        <div className="LikedSongsPage-page">
          <div className="col-xs-12 col-lg-3 col-xl-4">
            <div class="container">
              <img
                src="https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png"
                alt="like-image"
              />
              <button className="imageBtn">
                <i className="far fa-play-circle"></i>
              </button>
            </div>
            <h3 className="label">Liked Songs</h3>
            <button className="plyBtn">Play</button>
          </div>
          <div className="col-xs-12 col-lg-9 col-xl-8">
            <LikedSongList Songs={this.state.Songs} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="LikedSongsPage-page">
          <div className="col-xs-12 col-lg-3 col-xl-4">
            <div class="container"></div>
            <div
              style={{
                color: "white",
                fontSize: "68px",
                paddingTop: "120px",
                paddingLeft: "220px",
              }}
            >
              {" "}
              NO LIKED SONGS{" "}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default LikedSongsPage;
