import React, { Component } from "react";
import {Modal,Button} from 'antd';
import axios from "axios";
import Playbutton from "./PlayButton";
import "./avatar.css"; 
class Changer extends Component {
    constructor(props){
        super(props);
     this.state = { 
         visible: false,
         change:true
   
   };
    }

    
     /**
   * @property {Function} showModal - post picture data form upload to a fake server
   * @param {}
   * @returns {}
   */
      showModal  (e)  {
        let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("DATA", e.target.result);
      const formData = { file: e.target.result };
      const URL = "http://localhost:4000/data";
      axios
        .post(URL, formData)
        .then((response) => console.warn("RESULT", response));
    };
    return 1 * e;
  }

   
       handleSave = e => {
        this.setState({
          change: false,
        });
       alert('Saved')
       };
   
     render() {
         
       return (
         <div>
   <li
              className="pickFileButton"
              onClick={() => this.fileInput.click()}
              style={{marginLeft:90}}
            >
              <div onSubmit={this.onSubmit}>
                <input
                  type="file"
                  name="photo"
                  style={{ display: "none" }}
                  onChange={(e) => this.showModal(e)}
                  ref={(fileInput) => (this.fileInput = fileInput)}
                />
              </div>
              Upload Your Spotify Profile Picture
            </li> <br></br>

            
         <h6 style={{marginLeft:100}}>Then please refresh to save changes.</h6> <br></br>
         
         </div>
       );
     }
   }
   export default Changer;
   