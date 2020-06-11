import React, { Component } from "react";
import "./RandomSongPage.css";
import RandomSongList from "./RandomSongList";
import "./LikeButton.css";
import "./Library.css";
import CommentWindow from "./Comment";

/**
 * Class for a random playlist "first card playlist" in discover page
 */
class NewPlaylist extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      color: "white",
      Songs: [],
      cardData: "",
      check: [],
    };
   
  }
  /**
   * fetchind data of libraries from a fake server
   * @property {Function} componentDidMount
   * @param {}
   * @returns {void}
   */
  componentDidMount() {
    fetch("http://localhost:4000/PlaylistSongs")
      .then((response) => response.json())
      .then((users) => this.setState({ Songs: users }));

   

    let url  = "http://localhost:4000/NewPlaylists";
    if (window.location.href === "http://localhost:3000/collection/10") {
      url = "http://localhost:4000/NewPlaylists";
    }
    fetch(`http://localhost:4000/NewPlaylists`)
      .then((response) => response.json())
      .then((data) => this.setState({ cardData: data })).catch(e=>console.log(e));
      
    
  }
  
  /**
   * POST and DELETE data to fake server if user click on like button
   * Check to POST or DELETE by butoon color
   * @property {Function} handleClick
   * @param {}
   * @returns {void}
   */
 

  render() {
    let data = this.state.cardData;
    // const text = this.state.liked ? "liked" : "haven't liked";
    if (this.state.Songs.length == 0){
      return(
        <div className="RandomSong-page">
        <div className="col-xs-12 col-lg-3 col-xl-4">
          <div className="container">
            <img
              name="img"
              src="https://i.picsum.photos/id/1037/5760/3840.jpg"
              alt="like-image"
            />
            <button className="imageBtn">
              <i className="far fa-play-circle"></i>
            </button>
          </div>
          
          <h3 className="label">{data.header}</h3>
          <button className="plyBtn">Play</button>
          <div className="customContainer">
            <button className="heartBtn" style={{ color: this.state.color }}>
              <i
                className="fas fa-heart fullHeart"
                
              ></i>
            </button>
            {/* <p>you {text} this. Click to toggle.</p> */}
            {<CommentWindow />}
          </div>
        </div>
        <div className="col-xs-12 col-lg-9 col-xl-8">
          <h1 id="playlists1">Looks a bit empty in here</h1>
          <h6 id="playlists2">
            Add songs to this playlist to enjoy listening!
          </h6>
          
        </div>
      </div>
      );
    }
    return (
      <div className="RandomSong-page">
        <div className="col-xs-12 col-lg-3 col-xl-4">
          <div className="container">
            <img
              name="img"
              src="https://i.picsum.photos/id/1037/5760/3840.jpg"
              alt="like-image"
            />
            <button className="imageBtn">
              <i className="far fa-play-circle"></i>
            </button>
          </div>
          
          <h3 className="label">{data.header}</h3>
          <button className="plyBtn">Play</button>
          <div className="customContainer">
            <button className="heartBtn" style={{ color: this.state.color }}>
              <i
                className="fas fa-heart fullHeart"
                
              ></i>
            </button>
            {/* <p>you {text} this. Click to toggle.</p> */}
            {<CommentWindow />}
          </div>
        </div>
        <div className="col-xs-12 col-lg-9 col-xl-8">
          <RandomSongList Songs={this.state.Songs} isPremium={this.props.isPremium}/>
        </div>
      </div>
    );
  }
}
export default NewPlaylist;
