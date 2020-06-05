import React, { Component } from "react";
import { Avatar } from "antd";
import "./HomeNavbar.css";
import ProfilePicChanger from "../Components/ProfilePicChanger";
import Subnavbar from "./Subnavbar";
import { UserOutlined } from '@ant-design/icons';

/**
 * Navbar for Home page and also for artist page
 */
class HomeNavbar extends Component {
  constructor(props){
    super(props);
 this.state = {
     file:"",

};
}



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
        <div className="main-nav">
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
                <a href="/ProfilePicChanger">Update Profile Picture</a>
                <a href="/login">Logout</a>
              </div>
            </div>
          </li>
        </div>
        <Subnavbar/>
      </div>
    );
  }
}

export default HomeNavbar;
