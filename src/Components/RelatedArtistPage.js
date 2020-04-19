import React, { Component } from "react";
import axios from "axios";
import Playbutton from "./PlayButton";
import Follow from "./Follow";

class RelatedArtistPage extends Component {
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
    return 1 * 1;
  }
  render() {
    return (
      <div className="ArtistPageLayout">
        <div className="Artist-profile">
          <h1 className="name">Amr Diab</h1>
          <ul className="buttons">
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
        <h1 style={{ color: "white" }}>HELLO ! Artist Page</h1>
      </div>
    );
  }
}

export default RelatedArtistPage;
