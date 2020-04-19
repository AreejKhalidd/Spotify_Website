import React, { Component } from "react";
import "./DiscoverPage.css";
// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class DiscoverPage extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
    };
  }

  componentDidMount() {
    let url = "http://localhost:4000/albums";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          card: data,
        })
      );
  }
  //   handleClick(e, data) {
  //     console.log(data.foo);
  //   }
  render() {
    let data = this.state.card;
    console.warn(data);
    return (
      <div className="DiscoverPage">
        <div className="headlines">
          <h1 id="discover">Discover</h1>
          <a href="/genre/featured-playlists" id="editor">
            Editors' Picks
          </a>
          <a href="/genre/featured-playlists" id="seeAll">
            SEE ALL
          </a>
        </div>
        <div className="row">
          <a href="/playlist/haha" className="column">
            <div className="card ">
              <h3>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/582605921b631b6ea0d49277/1499453362718-6R37UNLIP7MNIF65JA9U/ke17ZwdGBToddI8pDm48kP06O0_IHyRXSOOiqwgWaApZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEHLRkg2cosQUGLeQ33UzXdgIxPDaVwE3LlEpL74qP4JVW4jCyXLPvvdR287iymYt8/DYLN_dyln_BetterThings_Singer_Songwriter_Canadian_Brooklyn_Dylan_Songstress_Lyrics_NewYork_Music_Blog_Blogger_NewMusicFriday_Spotify_Playlist_Star_Viral50_Canada_Hits_Songs_Singers_Billboard_Hypem_Famous_Celebs_Canada_Singers_Hits_Viral_Songs_News.JPEG"
                  alt="cardImage"
                />
              </h3>
              <p className="albumName">New Music Friday Egypt</p>
              <p className="albumDescription">
                The very best music from around the world.
              </p>
              <button className="playButton">
                <i class="fa">&#xf04b;</i>
              </button>
            </div>
          </a>
          {/* <div>
            <ContextMenuTrigger id="some_unique_identifier">
              <div className="well">Right click to see the menu</div>
            </ContextMenuTrigger>
            <ContextMenu id="some_unique_identifier">
              <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
                ContextMenu Item 1
              </MenuItem>
              <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
                ContextMenu Item 2
              </MenuItem>
              <MenuItem divider />
              <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
                ContextMenu Item 3
              </MenuItem>
            </ContextMenu>
          </div> */}

          <a href="/playlist/123" class="column">
            <div class="card">
              <h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdvWRDSL0gXDmJX_VW30avhqW9F4beAuKetX2l_y_92IrKn0Mz&usqp=CAU"
                  alt="cardImage"
                />
              </h3>
              <p className="albumName">Chill Bel Masry</p>
              <p className="albumDescription">
                Slow it down with some mellow Egyptian hits.
              </p>
            </div>
          </a>
          <a href="Playlist/159" class="column">
            <div class="card">
              <h3>
                <img
                  src="https://i.scdn.co/image/ab67706f00000002a7c4233dd872591dc502fd8d"
                  alt="cardImage"
                />
              </h3>
              <p className="albumName">Funk & Disco Zaman </p>
              <p className="albumDescription">
                A playlist for your Arab hipster starter kit.
              </p>
            </div>
          </a>

          <a href="Playlist/789" class="column">
            <div class="card">
              <h3>
                <img
                  src="https://i.scdn.co/image/ab67706f0000000215f81a1b5a719d6505227fd0"
                  alt="cardImage"
                />
              </h3>
              <p className="albumName">Acoustic Arabic</p>
              <p className="albumDescription">
                Chill to these acoustic songs from the Middle East.
              </p>
            </div>
          </a>

          <a href="Playlist/456" class="column">
            <div class="card">
              <h3>
                <img
                  src="https://i.scdn.co/image/ab67706f000000021c6e257c426955c06bdfb9ef"
                  alt="cardImage"
                />
              </h3>
              <p className="albumName">Today's Top Egyptian</p>
              <p className="albumDescription">
                Top 50 Egyptian hits right now.Cover:Wegz.
              </p>
            </div>
          </a>
          <a href="Playlist/haha" class="column">
            <div class="card">
              <h3>
                <img
                  src="https://i.scdn.co/image/ab67706f000000023c41e1ea5a158a598fc56725"
                  alt="cardImage"
                />
              </h3>
              <p className="albumName">Dabke Dance</p>
              <p className="albumDescription">The Essential Dabke selection.</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default DiscoverPage;
