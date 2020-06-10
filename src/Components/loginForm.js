import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import "./login.css";
import "./page.js";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
      isLoading: false,
      nameError: "",
      passwordError: "",
      loggedIn: false,
      loggingError: "",
      user:false,  //array of users
      login:false,
      setLogin:false,
      data:{},
      setData:{},
     picture:'',
     setPicture:'',
     passName:"" //check later for change name inside

      
       
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

/*
  componentDidMount(){
    let url= process.env.URL + "/users/login";
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-TYpe':'application/json',
      }
    }).then((result)=> {
     result.json().then((resp) =>{

this.setState({user:resp})
     })
    })
  } 
  */
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };


//function documentation
/*
* Handles validations 
*@function isValid
*@param {event} 
*/
  isValid() {
    if (this.state.identifier.length < 1 && this.state.password.length < 1) {
      this.setState({
        nameError: "Please enter your Spotify username or email address.",
        passwordError: "Please enter your password."
      });
    } else if (
      this.state.identifier.length < 1 &&
      this.state.password.length > 0
    ) {
      this.setState({
        nameError: "Please enter your Spotify username or email address."
      });
    } else if (
      this.state.password.length < 1 &&
      this.state.identifier.length > 1
    ) {
      this.setState({ passwordError: "Please enter your password." });
    } else {
      return true;
    }
  }

//////////////////////////////////
/**
   * @property {Function} responseFacebook - Handle Login with Facebook request
   * @param {}
   * @returns {}
   */
   responseFacebook = (response) => {
    console.log(response);
    this.setState({setData:response});
      if (response.accessToken) {
      this.setState({loggedIn:true});
      console.log(this.state.data);
     //var h =response.accesstoken;
      localStorage.setItem('tokenfromlogin',response.name)
      
    } else {
      this.setState({loggedIn:false});
      localStorage.setItem('tokenfromlogin',"User")
    }
  }

/////////////////////////////////


  //function documentation
/*
* Handles login submission
*@function onSubmit
*@param {event} - submit event
*/
onSubmit = e => {

    this.setState({ nameError: "", passwordError: "" });
    e.preventDefault();

    if (this.isValid()) {
      //-------------------------------------------------------
      let url=process.env.REACT_APP_URL + "/users/login";
     
      let data ={
        'email':  this.state.identifier,
        'password': this.state.password,
      }

      console.log(data)
   fetch(url,{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-TYpe':'application/json',
    },
    body:JSON.stringify(data)
  }) .then((response)=> {
    response.json().then((body) =>{

    console.log(body)
    console.log(response.status)

    if(response.status == 400) {
      this.setState({loggingError:"Incorrect user or password",loggedIn:false});
    }
    else {
      this.setState({loggedIn: true});
      var h =body.token;
      localStorage.setItem('tokenfromlogin',h)
    }
  })
})
}
};
  render() {
    const { identifier, password, isLoading } = this.state;
    
    if (this.state.loggedIn) {
      return (window.location.href = "/Home");
    }

    return (
      <form id="loginForm">
        <h3> To continue,log in to Spotify </h3>
        <div className="error">{this.state.loggingError}</div> <br />
        
        
          
            <FacebookLogin 
              id="one"
              appId="265333214672078"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={this.responseFacebook}
              icon="fa-facebook"
              cssClass="btnFacebook" 
              textButton = "&nbsp;&nbsp;Log In with Facebook"
              />
          

        <h3>OR</h3>
        <input  
          id="email"       
          name="identifier"
          field="identifier"
          value={identifier}
          className="center"
          type="text"
          placeholder="Enter Username or Email "
         
          onChange={this.onChange}
        />
        <div className="error">{this.state.nameError}</div> <br />
        <input
          id="password"
          name="password"
          field="password"
          value={password}
          type="password"
          className="center"
          placeholder="Password"
          onChange={this.onChange}
        />
        <div className="error">{this.state.passwordError}</div> <br />
        <button className="btn" onClick={this.onSubmit} disabled={isLoading}>
          LOG IN
        </button>{" "}
        <br />
        <a href="/ForgetPassword" className="hyperLink">
          Forgot your password?
        </a>
        <hr />
        <h3>Don't have an account ?</h3>
        <a className="btn3" href="/signup" disabled={isLoading}>
          SIGN UP FOR SPOTIFY
        </a>
      </form>
    );
  }
}

export default Loginform;
