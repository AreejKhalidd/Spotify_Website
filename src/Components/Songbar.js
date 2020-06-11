import React,{Component} from 'react';
import { ProgressBar } from 'react-bootstrap';
import {Howl} from 'howler';
import './Songbar.css'
import axios from 'axios'


const songs=[
    {
        artistname:'Amr Diab',
        songname:'Tamaly Ma3ak',
        photo:"https://i.scdn.co/image/ab67616d00004851d352e68d3f9ef21f6d167a96",
        song: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3'
        
    },
    {
        artistname:'Mohamed Mounir',
        songname:'Mahmoum',
        photo:'https://i.scdn.co/image/ab67616d0000485194c8720bbc5c73fcd9ee3088',
        song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        
    },
    {
        artistname:'Mohamed Hamaki',
        songname:'Ya Sattar',
        photo:"https://i.scdn.co/image/ab67616d00004851e33e51cc66ef3d4f45f4e6c8",
        song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {

        artistname:'Hamada Helal',
        songname:'Ashrab Shay',
        photo:'https://i.scdn.co/image/ab67616d000048518fa3f1a502fb51aebe12a0d4',
        song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    },
    {
        artistname:'Mohamed Hamaki',
        songname:'Nefsi Abaa Ganbo',
        photo:'https://i.scdn.co/image/ab67616d000048519c38a56778f8679d8b82affb',
        song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
    },
    {
        artistname:'Tamer Hosny',
        songname:'Nasseeny Leih',
        photo:'https://i.scdn.co/image/ab67616d000048512b737b0411be58583293e17e',
        song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
]



let sound =null;

/**
 * Song bar has 9 responsibilities :loading the song, its name, its photo and artist name ,it also play and pause the song ,it has a progress time and 
 * progress time bar ,it switch between songs and get the next or previous song when user choose and it allow user to mute the song or play it with a sound 
 */


class Songbar extends Component{
    constructor(){
        super();
        this.state={
            // songs=[], for Mocking
            artistName:[],
            songName:[],
            songPhoto:[],
            soundsong:[],
            Toggle :true,
            playbutton : <i onClick={this.toggle} id='Play' className="far fa-play-circle" title='Play'></i>,
            totalMinutes:'00',
            totalSeconds:'00',
            currentMinute:'00',
            currentSecond:'00',
            progress:0,
            volControl:true,
            volumebutton:<i onClick={this.volumeControl} id='Volume' className="fas fa-volume-up"></i>,
            volume:100,
            songsCount:5,
            playedSong:0,
            count:0,

            likedSong: [],
            heart: "far fa-heart",
            heartColor: "white",
            isLiked: false,

            playingSong: [],

            
        };
       
        this.toggle=this.toggle.bind(this);
        this.timer=this.timer.bind(this);
        this.volumeControl=this.volumeControl.bind(this);
        this.nextSong=this.nextSong.bind(this);
        this.previousSong=this.previousSong.bind(this);
        this.render = this.render.bind(this);
    }

    /**
     * componentDidMount here is responsiple for fetching the queue of songs ,calling SongsAnalyze function to reload the fetched data and updating the
     * progress time and progress bar every second 
     */

    componentDidMount(){
        //Mocking
        // let url = "http://localhost:4000/likedSong";
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => this.setState({ likedSong: data }));
        // fetch("http://127.0.0.1:8080/queuesongs.json")
        // .then((response) => response.json())
        // .then((songbardata) => this.setState({ songs: songbardata }));
        this.SongsAnalyze()
        // this.time = setInterval(() => {
        //     this.timer()
        //     this.progressBarReload()
        // }, 1000);

         
      fetch("http://localhost:4000/CurrentSong")
        .then((response) => response.json())
        .then((data) => this.setState({ playingSong: data }));
    }


    


    componentWillUnmount() {
        clearInterval(this.time);

    }
    /**
     * SongsAnalyze function fill the artist name,song name, song picture and song url in arrays seperatly to manipulate the needed data easily,
     *  it is called after render immediately, exactly in componentdidmount function due to react life cycle 
     */

    SongsAnalyze(){
        let songnm =[];
        let artistnm =[]
        let pic =[];
        let SSong = [];
        for (let i = 0; i < songs.length; i += 1){
            let obj=songs[i];
            artistnm.push(obj.artistname)
            songnm.push(obj.songname)
            pic.push(obj.photo)
            SSong.push(obj.song)
        }
        let joinnm = this.state.artistName.concat(artistnm);
        this.setState({ artistName: joinnm })
        let joinpic = this.state.songPhoto.concat(pic);
        this.setState({ songPhoto: joinpic })
        let joinsn = this.state.songName.concat(songnm);
        this.setState({ songName: joinsn })
        let joinss = this.state.soundsong.concat(SSong);
        this.setState({ soundsong: joinss })
        
        
    }

    /**
     * loadsong function loads the song and gets its full time by calling getTime function   
     */

    loadSong(){
      if (this.state.playingSong.length == 0) {
        if (this.state.count === 0) {
          sound = new Howl({
            src : (this.state.soundsong)[this.state.playedSong],
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
      this.getTime()
    }

    /**
     * toggle function changes the boolean Toggle to its opposite which according to it ,it displays the play button and pausing the song or pause button 
     * and playing the song and when user changes the song to the next or the previous ones it unload the song 
     */

    toggle(){
        this.loadSong()
        let opposite = !(this.state.Toggle);
        this.setState({Toggle:opposite});
        if(this.state.Toggle === true ){    
            sound.play();
            this.setState({count:this.state.count+1});    
        }
        
        else if(this.state.count !== 0){
            sound.pause();
        }

        else if (this.state.count === 0){
            sound.stop();
            sound.unload();
            sound = null;
        }
    }

    /**
     *  volumeControl changes volume from on to off "mute/unmute"  
     */

    volumeControl(){
        let opposite = !(this.state.volControl);
        this.setState({volControl:opposite})
        if(this.state.volControl === true){
            this.setState({volume:0})
            sound.volume(0)
        }
        else{
            this.setState({volume:100})
            sound.volume(1)
        }
    }

    /**
     * nextSong get the next song and its info "name,photo and artist name" ,it check if the current song is the last song and if it is ,it gets the first
     * song so it deals with song array as a circular array
     */

    nextSong(){
        if(this.state.playedSong === this.state.songsCount){
            this.setState({playedSong:0})
            this.setState({count:0})
            this.toggle()
            
        }
        else{
            this.setState({playedSong:this.state.playedSong+1})
            this.setState({count:0})
            this.toggle()
        }
    }

    /**
     * previousSong get the previous song and its info "name,photo and artist name" ,it check if the current song is the first song and if it is ,it gets the last
     * song so it deals with song array as a circular array
     */

    previousSong(){
        if(this.state.playedSong === 0){
            this.setState({playedSong:this.state.songsCount})
            this.setState({count:0})
            this.toggle()
            
        }
        else{
            this.setState({playedSong:this.state.playedSong-1})
            this.setState({count:0})
            this.toggle()
            
        }

    }

    /**
     * getTime function get the full time of the song 'its duration' by minutes and seconds
     */

    getTime(){
        let min = sound.duration();
        let sec =0;
        for(let i=0;i<Math.ceil(sound.duration()/60) ;i++){
            min=min-60;
            if(min < 60){
                sec=min;
                min=i+1;
                break;
            }
        }
        if(min < 10){
            let minstring = '0' + min.toString();
            this.setState({totalMinutes:minstring})
            
        }
        else{
            this.setState({totalMinutes:min.toString()})
        }
        if(sec < 10){
            let secstring = '0' + Math.floor(sec).toString();
            this.setState({totalSeconds: secstring})
        }
        else{
            this.setState({totalSeconds:(Math.floor(sec).toString())})
        }
    }
        


    /**
     * timer function get the current time of the song by minutes and seconds
     */

    timer(){
        this.loadSong()
        if(this.state.count !== 0){
            let currmin=sound.seek();
            currmin=Math.floor(currmin / 60);
            if(currmin < 10){
                let cminstring = '0' + currmin.toString();
                this.setState({currentMinute:cminstring})   
            }
            else{
                this.setState({currentMinute:currmin.toString()})
            }
            let currsec=sound.seek();
            currsec=Math.floor(currsec%60);
            if(currsec < 10){
                let csecstring = '0' + currsec.toString();
                this.setState({currentSecond:csecstring});   
            }
            else{
                this.setState({currentSecond:currsec.toString()});
            }
        }
    }

    /**
     * progressBarReload function updates the progress bar according to the progressed time of the song
     */

    progressBarReload(){
      if(this.state.count !== 0){
          let prog = (sound.seek())
          prog = (prog/(sound.duration()))*100
          this.setState({progress:prog})
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


    
    
    
    
  render(){

    console.warn("liked Song Data", this.state.likedSong);
    if(this.state.Toggle === true){
        this.state.playbutton = <i onClick={this.toggle} id='Play' className="far fa-play-circle" title='Play'></i> ;
        
    }
    else{
        this.state.playbutton = <i onClick={this.toggle} id='Play' className="far fa-pause-circle" title='Pause'></i> ;
    }
    if(this.state.volControl === true){
        this.state.volumebutton = <i onClick={this.volumeControl} id='Volume' className="fas fa-volume-up"></i>;  
    }
    else{
        this.state.volumebutton = <i onClick={this.volumeControl} id='Volume' className="fas fa-volume-mute"></i>;
    }
    
    if (this.state.playingSong.length === 0){
    return(
        <div className="SongbarShape">
            <img className="SongImage" src={(this.state.songPhoto)[this.state.playedSong]} alt={(this.state.songName)[this.state.playedSong]} />
            <i id="EnlargeImage" className="fas fa-chevron-circle-up"></i>
            <a className='SongName'>{(this.state.songName)[this.state.playedSong]}</a>
            <a className="ArtistName">{(this.state.artistName)[this.state.playedSong]}</a>
            <i id="Like" style={{ color: this.state.heartColor }} className={this.state.heart} onClick={this.handleLike}></i>
            <i id="Like" className="far fa-heart"></i>
            {this.state.playbutton}
            <i onClick={this.nextSong} id='Next' className="fas fa-step-forward" title='Next'></i>
            <i onClick={this.previousSong} id='Previous' class="fas fa-step-backward" title='Previous'></i>
            <i id='Repeat' className="fas fa-redo"></i>
            <i id='Shuffle' className="fas fa-random"></i>
            <ProgressBar  variant="success" id='Progress' now={this.state.progress} />
            <div className="ProgressTimeRemaining">{this.state.currentMinute}:{this.state.currentSecond}</div>
            <div className="ProgressTimeTillEnd">{this.state.totalMinutes}:{this.state.totalSeconds}</div>
            <i id='Queue' className="fas fa-bars"></i>
            <i id='Connect' className="fas fa-tv"></i>
            <i id='Device' className="fas fa-mobile-alt"></i>
            {this.state.volumebutton}
            <ProgressBar onClick={this.volumeControl}  variant="success" id='Volumebar' now={this.state.volume} />
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
            {this.state.volumebutton}
            <ProgressBar onClick={this.volumeControl}  variant="success" id='Volumebar' now={this.state.volume} />
         </div>
     
     
   );
    }
  }
}
    

 
export default Songbar;
