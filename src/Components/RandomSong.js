import React from "react";
import "./RandomSong.css";
import { Modal,Dropdown } from "react-bootstrap";
import IsPremiumUser from './IsPermium';

let id = 100;

const RandomSong = ({
  songName,
  duration,
  artistLink,
  artistName,
  albumLink,
  albumName,
  downloadRef,
  isPremium
}) => {
  function handleClickAdd(e) {
    
    e.preventDefault();
    alert("Add to Playlist was clicked");

    fetch(`http://localhost:4000/PlaylistSongs`,
        {
            method:"POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              songName,
              duration,
              artistLink,
              artistName,
              albumLink,
              albumName,
              downloadRef,
              id: id

            })
        }).then(()=>{
            console.log("ana henaaaa");
            id++;
             window.location.reload(false);
    })
            .catch(exception=>console.log(exception))
            
  }

  function handleClickDelete(e) {
    
    e.preventDefault();
    alert("Remove from Playlist was clicked");
    
    fetch("http://localhost:4000/PlaylistSongs/"+id,
        {
            method:"DELETE", 
         
        }).then(()=>{
            console.log("ana batmeseeee77");
            id++;
             window.location.reload(false);
    })
            .catch(exception=>console.log(exception))
            
  }

  function playSong(e){
    e.preventDefault();

  }
  
  return (
    <div>
      <ul className="playlist">
        <li>
          <i className="fa fa-music music"></i>
          <i onClick = {playSong} className="fa fa-play play"></i>
          <span>{songName}</span>
          <i className="duration">{duration}</i>
          <br />
          <i>
            <a href={artistLink}>{artistName}&nbsp;&nbsp;</a>
            <a href={albumLink}>{albumName}</a>

          </i>
            <Dropdown >
                <Dropdown.Toggle  variant="success" id="dropdown-basic">
                  
                </Dropdown.Toggle>

                <Dropdown.Menu className = "drop-down">
                  <Dropdown.Item className = "drop-down" href="#/action-1"  onClick={handleClickAdd}>Add to playlist</Dropdown.Item>
                  <Dropdown.Item className = "drop-down" href="#/action-2" onClick={handleClickDelete}>Remove from playlist</Dropdown.Item>
                  { isPremium? <Dropdown.Item className = "drop-down" href={downloadRef}>Download</Dropdown.Item>:null}
                  </Dropdown.Menu>
            </Dropdown>
        </li>
      </ul>
    </div>
  );
};
export default RandomSong;
