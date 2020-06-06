import React from "react";
import  "./AcountSideBar.css";

class AcountSideBar extends React.Component {
render(){
    return(
    <div class="side">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Account Info</h3>
            </div>

            <ul class="list-unstyled components">


            <img
                className="logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="logo"
                width="auto"
                height="40"
                />
                
                <li>
                    <a href="/AccountoverView" className="buttons">Account Overview</a>
                </li>
                <li>
                    <a href="/EditProfile"className="buttons">Edit Profile</a>
                </li>
                <li>
                    <a href="/Recover" className="buttons">Recover Playlist</a>
                </li>
                <li>
                    <a href="/EditPassword" className="buttons">Edit Password</a>
                </li>
                
                <li>
                    <a href="/Home" className="buttons">Recipits</a>
                </li>
                <li>
                    <a href="/Movetoprem"className="buttons">Move to Premium</a>
                </li>
                <li>
                    <a href="/Home"className="buttons">Notifications Setting</a>
                </li>
                <li>
                    <a href="/Home"className="buttons">Go Back Home</a>
                </li>
            </ul>

        </nav>
        

        
    </div>
    );
    }
}


export default AcountSideBar;