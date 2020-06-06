import React ,{Component} from 'react';
import './SearchforSongsArt.css';
import {Artists} from "./Artistsdata";
import ArtistCard from './ArtistCard';
import Songbar from './Songbar';
//import {songs} from './StaticSongsdataForSearch';
import LikedSong from "./LikedSong";
import SearchedSong from "./SearchedSong"

const songs=[ //there are always function that fetch songs from server 
  {
      id:1,
      name:"Osad Einy",
      duration:"3",
      artist:"",
      artistName:"AmrDiab",
      albumLink:"",
      albumName:"Amareen"
  },

]


   /*
here  are only i use constant data to be always appear but i make mocking also and here down are the mocking functions
    */
      /**
    * this functionhelp in filtering the songs andartists by wriiten input
    * @function searching
    * @param {event} e - onChange event
    */
  
function searching(searchby){
   return function(x){
       return x.name.toLowerCase().includes(searchby.toLowerCase()) || !searchby;
   }
}  

class SearchforSongsArt extends Component {

    constructor(props){
        super(props);
        this.state ={
           searchby:localStorage.getItem('stringg'),
           Artists: Artists,
           songs:songs,
           show:false,

        }
       // this.dosearch = this.dosearch.bind(this);
      }

                /**
    * mocking to get the songs and artist data
    */
      /*
       componentDidMount(){
      const tokenn =localStorage.getItem('tokenfromlogin')
      //let url= process.env.URL + "/";
      let url ='http://127.0.0.1:8080/songs.json';
      fetch(url,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-TYpe':'application/json',
          //'Authorization' :'Token'+tokenn
        }
      }).then((result)=> {
       result.json().then((resp) =>{
  
  this.setState({songs:resp})
       }) })
    } 
    */

          /**
    * update the input from user
    * @function dosearch
    * @param {event} e - onChange event
    */
 

   render () {
       if ( this.state.Artists.length === 0 ||this.state.songs.length === 0  ) return <h1>Loading...</h1>;
       const {searchby}= this.state;
        return (
            <div style={{paddingBottom:300}}  className ="searchPage">

                <h2> Songs:</h2>
                {
                songs.filter(searching(searchby)).map(user => {
                   return <SearchedSong
        key={user.id}
        songName={user.name}
        duration={user.duration}
        artistLink={user.artistLink}
        artistName={user.artistName}
        albumLink={user.albumLink}
        albumName={user.albumName}
      />})           
               }  
                <h1> Artists: </h1>
               {
                Artists.filter(searching(searchby)).map(user => {
                   return <ArtistCard key={user.id}  name={user.name} photo={user.photo} type={user.type} /> })           
               }       
            </div>
        );
    }
}
export default SearchforSongsArt;
