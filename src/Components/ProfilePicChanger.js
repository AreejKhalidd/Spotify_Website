import React, { Component } from "react";
import 'antd/dist/antd.css';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Changer from "../Components/Changer";
import "./avatar.css";
import Subnavbar from "../Components/Subnavbar";


class ProfilePicChanger extends Component {
 constructor(props){
     super(props);
  this.state = {
      isLoading: false,
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
/**
   * @property {Function} handleChange 
   * @param {}
   * @returns {}
   */
handleChange= (e) =>{
this.props.onSelect(e.target.value)
}
  render() {
    const {isLoading,file } = this.state;
    console.log(this.state.file)
     
    return (
      <div style={{backgroundImage:'url("./s5.jpg")', backgroundSize:'cover'}}> <br></br>
        { <Avatar size={250} icon={<UserOutlined />} src={this.state.file}  className="change" style={{marginLeft:100}} />  }
         <br></br> <br></br>
         <h4 style={{marginRight:600}}>{this.state.name} </h4>
        <hr></hr>
        <Changer /><hr></hr>
        <h4 style={{marginRight:450}}>Or share your profile to:</h4>
        <Subnavbar/> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br> <br></br>
      </div>
    );
        
  }
}
export default ProfilePicChanger;
