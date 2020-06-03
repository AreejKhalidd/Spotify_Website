import React, { Component } from "react";
import "./RandomSongPage.css";
import RandomSongList from "./RandomSongList";
import "./LikeButton.css";
import axios from "axios";

class RandomSongPage extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      color: "white",
      Songs: [],
      cardData: [],
      check: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:4000/likedSong")
      .then((response) => response.json())
      .then((users) => this.setState({ Songs: users }));

    /************************************** HERRRRRRRRRREEEEEEEEEE************************************* */
    fetch("http://localhost:8080/Albums/123")
      .then((response) => response.json())
      .then((data) => this.setState({ check: data }));
    if (this.state.check.length != 0) {
      this.setState({ color: "green" });
    }

    let url;
    if (
      window.location.href === "http://localhost:3000/1" ||
      window.location.href === "http://localhost:3000/2"
    ) {
      url = "http://localhost:4000/links";
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ cardData: data }));
  }

  handleClick = () => {
    let postURL = "http://localhost:8080/Albums";

    this.setState({
      liked: !this.state.liked,
    });
    if (this.state.color === "white") {
      this.setState({ color: "green" });

      axios
        .post(postURL, this.state.cardData[0])
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (this.state.color === "green") {
      axios
        .delete("http://localhost:8080/Albums/123", this.state.cardData[0])
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.warn("Card Data", this.state.cardData);
      this.setState({ color: "white" });
    }
  };

  render() {
    const text = this.state.liked ? "liked" : "haven't liked";
    console.warn("HAHAHAHAHAHAHAH", this.state.check);

    return (
      <div className="RandomSong-page">
        <div className="col-xs-12 col-lg-3 col-xl-4">
          <div class="container">
            <img
              name="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdvWRDSL0gXDmJX_VW30avhqW9F4beAuKetX2l_y_92IrKn0Mz&usqp=CAU"
              alt="like-image"
            />
            <button className="imageBtn">
              <i className="far fa-play-circle"></i>
            </button>
          </div>
          <h3 className="label">Chill Bel Masry</h3>
          <button className="plyBtn">Play</button>
          <div className="customContainer">
            <button className="heartBtn" style={{ color: this.state.color }}>
              <i
                className="fas fa-heart fullHeart"
                onClick={this.handleClick}
              ></i>
            </button>
            <p>you {text} this. Click to toggle.</p>
          </div>
        </div>
        <div className="col-xs-12 col-lg-9 col-xl-8">
          <RandomSongList Songs={this.state.Songs} />
        </div>
      </div>
    );
  }
}
export default RandomSongPage;
