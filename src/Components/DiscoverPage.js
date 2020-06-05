import React, { Component } from "react";
import "./DiscoverPage.css";
import DiscoverCardList from "./DiscoverCardList";

/**
 *
 * @property {class} DiscoverPage - Discover page list that contains Discover Card list
 * @param {}
 * @returns {}
 */
class DiscoverPage extends Component {
  constructor() {
    super();
    this.state = {
      Cards: [],
    };
  }

  /**
   * @property {Function} componentDidMount - fetch library cards data from a fake server
   * @param {}
   * @returns {}
   */
  componentDidMount() {
    fetch("http://localhost:4000/discoverPage")
      .then((response) => response.json())
      .then((users) => this.setState({ Cards: users }));
  }

  /**
   * @property {Function} render - renders card lists fetched from a fake server
   * @param {}
   * @returns {} div contains all libraries list fetched from a fake server
   */
  render() {
    if (this.state.Cards.length === 0) {
      return (
        <div>
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
          </div>
          <h1 style={{ color: "white", fontSize: "bold" }}>
            Loading <i class="fas fa-spinner fa-pulse"></i>
          </h1>
        </div>
      );
    }
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
          <DiscoverCardList Cards={this.state.Cards} />
        </div>
      </div>
    );
  }
}
export default DiscoverPage;
