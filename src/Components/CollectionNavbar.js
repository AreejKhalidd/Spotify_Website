import React, { Component } from "react";
import NotificationButton from "./NotificationButton";
import { Avatar } from "antd";
import "./CollectionNavbar.css";
import { UserOutlined } from '@ant-design/icons';

/**
 * Navbar for collection page (playlist, podacst, albums, artist)
 * and it appears in account profile aslo
 */
class CollectionNavbar extends Component {
  constructor(props){
    super(props);
 this.state = {
     file:"",
     name:localStorage.getItem('tokenfromlogin')

};
}


/**
   * @property {Function} componentDidMount - get picture data form a fake server to the avatar
   * @param {}
   * @returns {}
   */
componentDidMount() {
  let url= "http://localhost:4000/data";
  fetch(url,{
    method:'GET',
    headers:{
     'Accept':'application/json',
      'Content-TYpe':'application/json',
     'Authorization' :'Token'
    }
  }).then((results)=> {
  results.json().then((response) =>{
    console.log(response)
    
this.setState({file:response.file});


 
})    
})
}

  render() {
    return (
      <div className="NavLayout">
        <ul className="main-nav">
          <li>
            <a href="/Home" className="previous-btn prev">
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
            <a href="/collection/playlists" id="playlist-icon">
              Playlists
            </a>
          </li>
          <li>
            <a href="/collection/podcasts" id="prodcast-icon">
              Podcasts
            </a>
          </li>
          <li>
            <a href="/collection/artists" id="artists-icon">
              Artists
            </a>
          </li>
          <li>
            <a href="/collection/albums" id="albums-icon">
              Albums
            </a>
          </li>
          <NotificationButton />
          <li className="nav-item dropdown">
            <div className="dropdown">
              <button className="dropbtn">
                <Avatar size="small" icon={<UserOutlined />} src={this.state.file} /> {this.state.name}
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/account">Account</a>
                <a href="/login">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollectionNavbar;
