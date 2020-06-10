import React, { Component } from "react";
import DiscoverCardList from "./DiscoverCardList";
import {CreatePlaylist} from "./CreatePlaylist";
import "./Library.css";

/**
 * @property {Class} - library page that liked or created playlist added in
 */
class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: "",
      createPlaylistShow : false,
      playlists: "",
    };
  }
  
  
  componentDidMount() {
    let playlistsUrl = "http://localhost:4000/NewPlaylists";
    let url = "http://localhost:8080/Albums?q=123";
    fetch(playlistsUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ playlists: data })).catch(e=>console.log(e));
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ cardData: data })).catch(e=>console.log(e));

  }

  /**
   * @property {Function}  render that renders button that if user doesn't have any playlists or playlists if user creates or likes
   */
  render() {
    let createPlaylistClose = () => this.setState({createPlaylistShow : false});
    console.log("cardData length" , this.state.cardData.length);
    console.log("playlists length" , this.state.playlists.length);
    console.warn(this.state.cardData[0]);
    let data = this.state.cardData;
    let playlistData =  this.state.playlists;
    if ((this.state.cardData.length == 0) && (this.state.playlists.length == 0)) {
      return (
        <div className="playlists-page">
          <i id="playlists" className="fas" style={{ fontSize: "70px" }}>
            &#xf025;
          </i>
          <h1 id="playlists1">Create your first playlists</h1>
          <h6 id="playlists2">
            We’ll help you make the perfect mixtape, minus the tape.
          </h6>
          <a 
            onClick = {()=> this.setState({createPlaylistShow : true})}
            id="playlists-icon"
          >
            CREATE NEW PLAYLIST
          </a>
          <CreatePlaylist
            show = {this.state.createPlaylistShow}
            onHide = {createPlaylistClose}
            setLibraryState = {this.setState}
          />
        </div>
      );
    }
    if ((this.state.cardData.length == 0) && (this.state.playlists.length > 0)){
      return (
        <div className="playlists-page">
        <a href={playlistData[0].link}>
          <DiscoverCardList Cards={this.state.playlists} />
        </a>
        
      </div>
      );      

    }
    if ((this.state.playlists.length == 0) && (this.state.cardData.length > 0)){
      return (
        <div className="playlists-page">
        <a href={data[0].link}>
          <DiscoverCardList Cards={this.state.cardData} />
        </a>
        
      </div>
      );      

    }
    return (
      <div className="playlists-page">
         <a href={playlistData[0].link}>
          <DiscoverCardList Cards={this.state.playlists} />
        </a>
        <a href={data[0].link}>
          <DiscoverCardList Cards={this.state.cardData} />
        </a>
      </div>
    ); 

      
      
   
  }
}
export default Library;
