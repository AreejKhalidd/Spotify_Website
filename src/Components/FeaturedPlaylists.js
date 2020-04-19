import React, { Component } from "react";
import "./FeaturedPlaylists.css";
import DiscoverCardList from "./DiscoverCardList";

class FeaturedPlaylists extends Component {
  constructor() {
    super();
    this.state = {
      Cards: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/editorsSelector")
      .then((response) => response.json())
      .then((users) => this.setState({ Cards: users }));
  }

  render() {
    return (
      <div>
        <h1 id="editor2">Editors' Picks</h1>
        <div class="row2">
          <DiscoverCardList Cards={this.state.Cards} />
        </div>
      </div>
    );
  }
}
export default FeaturedPlaylists;
