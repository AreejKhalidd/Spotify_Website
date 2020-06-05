import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

/**
 * Navbar for Liked Tracks page
 */
class LikedTracksNavbar extends Component {
  constructor(props){
    super(props);
 this.state = {
     file:"",

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
          </li>
          <li className="upgrade" style={{ marginRight: "0px" }}>
            <a href="/Premium" id="upgrade-icon">
              UPGRADE
            </a>
          </li>
          <li
            className="nav-item dropdown"
            style={{
              marginLeft: "16px",
            }}
          >
            <div className="dropdown">
              <button className="dropbtn">
                <Avatar size="small" icon={<UserOutlined />} src={this.state.file} /> Username
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

export default LikedTracksNavbar;
