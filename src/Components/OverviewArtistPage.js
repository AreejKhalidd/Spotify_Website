import React, { Component } from "react";
import AlbumList from "./AlbumList";
import SongList from "./SongList";
import Playbutton from "./PlayButton";
import Follow from "./Follow";
import axios from "axios";

/**
 * Overview Page for Artists that contains list of songs and albums for each artist
 */
class OverviewArtistPage extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      songs: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ albums: users });
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ songs: users });
      });
  }

  /**
   * Upload file
   * @property {Function} Onchange that choose file and uplaod it same as in About page
   * @param {}
   * @returns {void}
   */
  onChange(e) {
    let files = e.target.files;
    //console.warn("FILE", files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("DATA", e.target.result);
      const formData = { file: e.target.result };
      const URL = "http://localhost:8080/songs";
      axios
        .post(URL, formData)
        .then((response) => console.warn("RESULT", response));
    };
    return 1 * e;
  }

  render() {
    const { albums, songs } = this.state;

    return (
      <div className="ArtistPageLayout">
        <div className="Artist-profile">
          <h1 className="name">Amr Diab</h1>
          <ul className="buttons">
            {/* <li id="play-btn">PLAY</li> */}
            <Playbutton />
            <Follow />
            <li
              className="pickFileButton"
              onClick={() => this.fileInput.click()}
            >
              <div onSubmit={this.onSubmit}>
                <input
                  type="file"
                  name="song"
                  style={{ display: "none" }}
                  onChange={(e) => this.onChange(e)}
                  ref={(fileInput) => (this.fileInput = fileInput)}
                />
              </div>
              Upload
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a href="/amr-diab/overview" id="overview-icon">
                Overview
              </a>
            </li>
            <li>
              <a href="/amr-diab/related-artists" id="relate-icon">
                Related Artists
              </a>
            </li>
            <li>
              <a href="/amr-diab/about" id="about-icon">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <section class="artistMusic">
            <div class="contentSpacing">
              <section class="artistTopTracks">
                <h1 class="popularHeader" dir="auto">
                  Popular
                </h1>
                <section class="trackListContainer trackListContainerBugHack fullWidth">
                  <ol class="tracklist">
                    <SongList songs={songs} />
                  </ol>
                </section>
              </section>
            </div>
          </section>

          <section class=" artistAlbums">
            <div class="contentSpacing">
              <h1 class="albumsHeader" dir="auto">
                Albums
              </h1>
              <div class="containerFluid containerFluid--noSpaceAround">
                <div class="gridRow gridLimit row">
                  <AlbumList albums={albums} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default OverviewArtistPage;
