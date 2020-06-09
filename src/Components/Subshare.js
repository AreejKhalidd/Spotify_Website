// Just use two social medias to make example simple.
import React, { Component } from "react";
import { 
  FacebookShareButton, 
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'


class Subshare extends Component {
    constructor(props) {
      super(props);
      this.state={
        myurl:""
      }
      }
     

      render() {
        if(window.location.href === "http://localhost:3000/ProfilePicChanger") {
  return (
    <div>
   
      <li
        className="network"
      >
        <FacebookShareButton
         className="network__share-button"
         url={"http://localhost:3000/ProfilePicChanger"}
         quote={"From Spotify Website"}
        >
          <FacebookIcon
            size={"1cm"}
          />
        </FacebookShareButton>
      </li>
      <li
        className="network"
      >
    

        <TwitterShareButton
          className="network__share-button"
          url={"http://localhost:3000/ProfilePicChanger"}
          quote={"From Spotify Websit"}
        >
          <TwitterIcon
            size={"1cm"}
          />
        </TwitterShareButton>
      </li>

      <li 
        className="network"
      >
        <WhatsappShareButton
          className="network__share-button"
          url={"http://localhost:3000/ProfilePicChanger"}
          quote={"From Spotify Websit"}
        >
          <WhatsappIcon
            size={"1cm"}
          />
        </WhatsappShareButton>
      </li>
      </div>
    //</SubShareCSS>
  )
        }
         if(window.location.href === "http://localhost:3000/Home"){
        return(
          <div>
           
      <li style={{marginLeft:950}}
        className="network"
      >
        <FacebookShareButton
         className="network__share-button"
         url={"http://localhost:3000/Home"}
         quote={"From Spotify Website"}
        >
          <FacebookIcon
            size={"1cm"}
          />
        </FacebookShareButton>
      </li>
      <li style={{marginLeft:950}}
        className="network"
      >
    

        <TwitterShareButton
          className="network__share-button"
          url={"http://localhost:3000/Home"}
          quote={"From Spotify Websit"}
        >
          <TwitterIcon
            size={"1cm"}
          />
        </TwitterShareButton>
      </li>

      <li style={{marginLeft:950}}
        className="network"
      >
        <WhatsappShareButton
          className="network__share-button"
          url={"http://localhost:3000/Home"}
          quote={"From Spotify Websit"}
        >
          <WhatsappIcon
            size={"1cm"}
          />
        </WhatsappShareButton>
      </li>
      </div>
    //</SubShareCSS>
  )
        }
        if(window.location.href === "http://localhost:3000/browse/discover"){
          return(
            <div>
             
        <li style={{marginLeft:950}}
          className="network"
        >
          <FacebookShareButton
           className="network__share-button"
           url={"http://localhost:3000/browse/discover"}
           quote={"From Spotify Website"}
          >
            <FacebookIcon
              size={"1cm"}
            />
          </FacebookShareButton>
        </li>
        <li style={{marginLeft:950}}
          className="network"
        >
      
  
          <TwitterShareButton
            className="network__share-button"
            url={"http://localhost:3000/browse/discover"}
            quote={"From Spotify Websit"}
          >
            <TwitterIcon
              size={"1cm"}
            />
          </TwitterShareButton>
        </li>
  
        <li style={{marginLeft:950}}
          className="network"
        >
          <WhatsappShareButton
            className="network__share-button"
            url={"http://localhost:3000/browse/discover"}
            quote={"From Spotify Websit"}
          >
            <WhatsappIcon
              size={"1cm"}
            />
          </WhatsappShareButton>
        </li>
        </div>
      //</SubShareCSS>
    )
          }
        
        return(
          <div>
           
      <li style={{marginLeft:950}}
        className="network"
      >
        <FacebookShareButton
         className="network__share-button"
         url={"http://localhost:3000/collection/tracks"}
         quote={"From Spotify Website"}
        >
          <FacebookIcon
            size={"1cm"}
          />
        </FacebookShareButton>
      </li>
      <li style={{marginLeft:950}}
        className="network"
      >
    

        <TwitterShareButton
          className="network__share-button"
          url={"http://localhost:3000/collection/tracks"}
          quote={"From Spotify Website"}
        >
          <TwitterIcon
            size={"1cm"}
          />
        </TwitterShareButton>
      </li>

      <li style={{marginLeft:950}}
        className="network"
      >
        <WhatsappShareButton
          className="network__share-button"
          url={"http://localhost:3000/collection/tracks"}
          quote={"From Spotify Website"}
        >
          <WhatsappIcon
            size={"1cm"}
          />
        </WhatsappShareButton>
      </li>
      </div>
    //</SubShareCSS>
  )
        
} //render
} //class
export default Subshare;
