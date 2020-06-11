import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import { Howl } from "howler";
import axios from "axios";

// import { useAudioPlayer} from "react-use-audio-player"

import "./Songbar.css";

// const soundsong ="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const soundsong = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3";
let sound = null;

class Songbar extends Component {
  constructor() {
    super();
    this.state = {
      Toggle: true,
      playbutton: (
        <i
          onClick={this.toggle}
          id="Play"
          className="far fa-play-circle"
          title="Play"
        ></i>
      ),
      totalMinutes: "00",
      totalSeconds: "00",
      currentMinute: "00",
      currentSecond: "00",
      progress: 0,
      count: 0,

      likedSong: [],
      heart: "far fa-heart",
      heartColor: "white",
      isLiked: false,

      playingSong: [],
    };

    this.toggle = this.toggle.bind(this);
    this.timer = this.timer.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    // this.time = setInterval(() => {
    //   this.timer();
    //   this.progressBarReload();
    // }, 100);

    let url = "http://localhost:4000/likedSong";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ likedSong: data }));

    fetch("http://localhost:4000/CurrentSong")
      .then((response) => response.json())
      .then((data) => this.setState({ playingSong: data }));
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  toggle() {
    console.log(this.state.Toggle);
    let opposite = !this.state.Toggle;
    this.setState({ Toggle: opposite });
    if (this.state.Toggle === true) {
      if (this.state.count === 0) {
        this.getTime();
      }

      // console.log(sound.volume(0.5))

      sound.play();
      this.setState({ count: this.state.count + 1 });
    } else {
      sound.pause();

      // sound.stop();
      // sound.unload();
      // sound = null;
    }
  }

  getTime() {
    let min = sound.duration();
    let sec = 0;
    for (let i = 0; i < Math.ceil(sound.duration() / 60); i++) {
      min = min - 60;
      if (min < 60) {
        sec = min;
        min = i + 1;
        break;
      }
    }
    if (min < 10) {
      let minstring = "0" + min.toString();
      this.setState({ totalMinutes: minstring });
    } else {
      this.setState({ totalMinutes: min.toString() });
    }
    if (sec < 10) {
      let secstring = "0" + Math.floor(sec).toString();
      this.setState({ totalSeconds: secstring });
    } else {
      this.setState({ totalSeconds: Math.floor(sec).toString() });
    }
  }

  timer() {
    let currmin = sound.seek();
    currmin = Math.floor(currmin / 60);
    if (currmin < 10) {
      let cminstring = "0" + currmin.toString();
      this.setState({ currentMinute: cminstring });
    } else {
      this.setState({ currentMinute: currmin.toString() });
    }
    let currsec = sound.seek();
    currsec = Math.floor(currsec % 60);
    if (currsec < 10) {
      let csecstring = "0" + currsec.toString();
      this.setState({ currentSecond: csecstring });
    } else {
      this.setState({ currentSecond: currsec.toString() });
    }
  }

  progressBarReload() {
    let prog = sound.seek();
    prog = (prog / sound.duration()) * 100;
    this.setState({ progress: prog });
  }

  delay(time) {
    let d1 = new Date();
    let d2 = new Date();
    while (d2.valueOf() < d1.valueOf() + time) {
      d2 = new Date();
    }
  }

  handleLike = () => {
    let postURL = "http://localhost:8080/likedSong";

    this.setState({
      isLiked: true,
    });
    if (this.state.heartColor === "white") {
      this.setState({ heartColor: "green", heart: "fas fa-heart fullHeart" });

      axios
        .post(postURL, this.state.likedSong[0])
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (this.state.heartColor === "green") {
      this.setState({ heart: "fas fa-heart" });
      axios
        .delete("http://localhost:8080/likedSong/2", this.state.likedSong[0])
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.warn("Card Data", this.state.likedSong);
      this.setState({ heartColor: "white" });
    }
  };

  render() {

    console.warn("liked Song Data", this.state.likedSong);
    if (this.state.Toggle === true) {
      this.state.playbutton = (
        <i
          onClick={this.toggle}
          id="Play"
          className="far fa-play-circle"
          title="Play"
        ></i>
      );
    } else {
      this.state.playbutton = (
        <i
          onClick={this.toggle}
          id="Play"
          className="far fa-pause-circle"
          title="Pause"
        ></i>
      );
    }
    // let playsong = {song.songRef};
    let playsong = "https://www.dlxfile.com/dl/3en/amr-diab/albums/me3ady-elnas/01%20Alby%20Etmannah.mp3";
    if (this.state.playingSong.length == 0) {
      if (this.state.count === 0) {
        sound = new Howl({
          src: soundsong,
          html5: true,
        });
      }
    }

    else {
      if (this.state.count === 0) {
        sound = new Howl({
          src: this.state.playingSong[0].downloadRef,
          html5: true,
        });
      }
    }
    if (this.state.playingSong.length == 0) {
      return (
        <div className="SongbarShape">
          <div className="SongImage"></div>
          <i id="EnlargeImage" className="fas fa-chevron-circle-up"></i>
          <a className="SongName"> نور عيني</a>
          <a className="ArtistName">Amr Diab</a>
          <i
            id="Like"
            style={{ color: this.state.heartColor }}
            className={this.state.heart}
            onClick={this.handleLike}
          ></i>
          {this.state.playbutton}
          <i id="Next" className="fas fa-step-forward"></i>
          <i id="Previous" class="fas fa-step-backward"></i>
          <i id="Repeat" className="fas fa-redo"></i>
          <i id="Shuffle" className="fas fa-random"></i>
          <ProgressBar
            variant="success"
            id="Progress"
            now={this.state.progress}
          />
          <div className="ProgressTimeRemaining">
            {this.state.currentMinute}:{this.state.currentSecond}
          </div>
          <div className="ProgressTimeTillEnd">
            {this.state.totalMinutes}:{this.state.totalSeconds}
          </div>
          <i id="Queue" className="fas fa-bars"></i>
          <i id="Connect" className="fas fa-tv"></i>
          <i id="Device" className="fas fa-mobile-alt"></i>
          <i id="Volume" className="fas fa-volume-up"></i>
          <ProgressBar variant="success" id="Volumebar" now={50} />
        </div>
      );
    }
    else{
     return (
      
        
           
         <div className="SongbarShape" key={0}>
            <div className="SongImage"></div>
            <i id="EnlargeImage" className="fas fa-chevron-circle-up"></i>
            <a className="SongName"> {this.state.playingSong[0].songName}</a>
            <a className="ArtistName"> {this.state.playingSong[0].artistName}</a>
            <i
              id="Like"
              style={{ color: this.state.heartColor }}
              className={this.state.heart}
              onClick={this.handleLike}
            ></i>
            {this.state.playbutton}
            <i id="Next" className="fas fa-step-forward"></i>
            <i id="Previous" class="fas fa-step-backward"></i>
            <i id="Repeat" className="fas fa-redo"></i>
            <i id="Shuffle" className="fas fa-random"></i>
            <ProgressBar
              variant="success"
              id="Progress"
              now={this.state.progress}
            />
            <div className="ProgressTimeRemaining">
              {this.state.currentMinute}:{this.state.currentSecond}
            </div>
            <div className="ProgressTimeTillEnd">
              {this.state.totalMinutes}:{this.state.totalSeconds}
            </div>
            <i id="Queue" className="fas fa-bars"></i>
            <i id="Connect" className="fas fa-tv"></i>
            <i id="Device" className="fas fa-mobile-alt"></i>
            <i id="Volume" className="fas fa-volume-up"></i>
            <ProgressBar variant="success" id="Volumebar" now={50} />
          </div>
      
      
    );
    }


  }
}

export default Songbar;
