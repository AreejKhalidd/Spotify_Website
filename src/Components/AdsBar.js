import React,{Component} from "react"
import "./AdsBar.css"
// import axios from 'axios' for Mocking


//use static data
const Adsdata=[
    {
        id:0,
        name:'Air Pods',
        photo:'https://target.scene7.com/is/image/Target/GUEST_6016b06d-e8d6-403a-9e1d-1938f45bb1f7?wid=488&hei=488&fmt=pjpeg'
    },
    {
        id:1,
        name:'Beats',
        photo:'https://www.powerplanetonline.com/cdnassets/beats_studio3_wireless_decade_collection_negro_rojo_01_l.jpg'    
    }
]

// const token = localStorage.getItem('token')

/**
 * class Ads for the Ads bar it render different Ads after a certain time and works for the free user only
 */

class Ads extends Component{
    constructor(){
        super();
        this.state={
            // Adsdata:[], // for Mocking
            //userdata:[], // for Mocking
            AdNo:0,
            Free:true,
            time:[],
            photo:[],
            name:[],
        };

        
    }

    /**
     * componentDidMount here has 3 responsipilities : 1)send the token by post method to the server and 2)recieve by get method the user data ,
     * also it 3)changes the ad every certain time 
     */
    componentDidMount(){
        //Mocking
        // axios.post('http://127.0.0.1:8080/user.json',token)
        // fetch("http://127.0.0.1:8080/user.json")
        // .then((response) => response.json())
        // .then((users) => this.setState({ userdata: users }));
        // fetch("http://127.0.0.1:8080/Adsdata.json")
        // .then((response) => response.json())
        // .then((Ads) => this.setState({ Adsdata: Ads }));
        // this.identifyuser()
        this.AdsAnalyze()
        this.time = setInterval(() => {
            this.setState({AdNo:this.state.AdNo +1})
            if(this.state.AdNo === 2){
                this.setState({AdNo:0})
            }
        },5000 );
       
    }

    /**
     * identifyuser filters the user data to determine if the user is free or not as ads appear for free users only 
     */
    //Mocking
    // identifyuser(){
    //     userdata.map( user => {
    //         if(user.type === 'Free'){
    //             this.setState({Free:true})
    //         }
    //     }
    //     )
    // }
    
    /**
     * AdsAnalyze function fill the ad name and photo in arrays seperatly to manipulate the needed data easily, it is called after render immediately,
     * exactly in componentdidmount function due to react life cycle  
     */
    AdsAnalyze(){
        let nms =[];
        let pic =[];
        for (let i = 0; i < Adsdata.length; i += 1){
            let obj=Adsdata[i];
            nms.push(obj.name)
            pic.push(obj.photo)
        }
        let joinnm = this.state.name.concat(nms);
        this.setState({ name: joinnm })
        let joinpic = this.state.photo.concat(pic);
        this.setState({ photo: joinpic })
    } 
    
    render(){
        if(this.state.Free === true ){
            return(
                    <div className="ImLayout">
                        <img alt={(this.state.name)[this.state.AdNo]} src={(this.state.photo)[this.state.AdNo]} width={550} height={150} />
                    </div>
            
            )
        }
        else{
            return null;
        }
        
    }

}




export default Ads;