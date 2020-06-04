import React,{Component} from 'react';
import { ProgressBar } from 'react-bootstrap';
import {Howl} from 'howler';
// import { useAudioPlayer} from "react-use-audio-player"

import './Songbar.css'

// const soundsong ="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const soundsong ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3";
let sound =null;

class Songbar extends Component{
    constructor(){
        super();
        this.state={
            Toggle :true,
            playbutton : <i onClick={this.toggle} id='Play' className="far fa-play-circle" title='Play'></i>,
            totalMinutes:0,
            totalSeconds:0,
            currentMinute:0,
            currentSecond:0,
            count:0
            
        };
       
        this.toggle=this.toggle.bind(this);
        this.timer=this.timer.bind(this)
        

    }
    toggle(){
        console.log(this.state.Toggle);
        let opposite = !(this.state.Toggle);
        this.setState({Toggle:opposite});
        if(this.state.Toggle === true ){
            if(this.state.count === 0){
                this.getTime()
            }
                    
            // console.log(sound.volume(0.5))
            
            sound.play();
            this.setState({count:this.state.count+1});    
        }
        
        else{
            sound.pause();
            
            
            // sound.stop();
            // sound.unload();
            // sound = null;
        }
    }

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
        this.setState({totalMinutes:min})
        this.setState({totalSeconds:Math.floor(sec)})

        
    }

    timer(){
        let currmin=sound.seek();
        currmin=Math.floor(currmin / 60);
        this.setState({currentMinute:currmin})
        let currsec=sound.seek();
        currsec=Math.floor(currsec%60);
        this.setState({currentSecond:currsec});

       
    }

    delay(time) {
        let d1 = new Date();
        let d2 = new Date();
        while (d2.valueOf() < d1.valueOf() + time) {
          d2 = new Date();
        }
      }
    
    
    render(){
        if(this.state.Toggle === true){
            this.state.playbutton = <i onClick={this.toggle} id='Play' className="far fa-play-circle" title='Play'></i> ;
            
        }
        else{
            this.state.playbutton = <i onClick={this.toggle} id='Play' className="far fa-pause-circle" title='Pause'></i> ;
        }
        if(this.state.count === 0){
            sound = new Howl({
                src : soundsong,
                html5 : true
            });
            
        }
        
        return(
            <div className="SongbarShape">
                <div className="SongImage" ></div>
                <i id="EnlargeImage" className="fas fa-chevron-circle-up"></i>
                <a className='SongName'>نور عينى</a>
                <a className="ArtistName">Amr Diab</a>
                <i id="Like" className="far fa-heart"></i>
                {this.state.playbutton}
                <i id='Next' className="fas fa-step-forward"></i>
                <i id='Previous' class="fas fa-step-backward"></i>
                <i id='Repeat' className="fas fa-redo"></i>
                <i id='Shuffle' className="fas fa-random"></i>
                <ProgressBar  variant="success" id='Progress' now={50} />
                <div className="ProgressTimeRemaining">{this.state.currentMinute}:{this.state.currentSecond}</div>
                <div className="ProgressTimeTillEnd">{this.state.totalMinutes}:{this.state.totalSeconds}</div>
                <i id='Queue' className="fas fa-bars"></i>
                <i id='Connect' className="fas fa-tv"></i>
                <i id='Device' className="fas fa-mobile-alt"></i>
                <i id='Volume' className="fas fa-volume-up"></i>
                <ProgressBar  variant="success" id='Volumebar' now={50} />
            </div>
            
        );
    
    }
    
}

export default Songbar;