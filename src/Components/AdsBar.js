import React,{Component} from "react"
import "./AdsBar.css"

//use static data
const Adsdata=[
    {
        id:0,
        name:'Air Pods',
        photo:'https://target.scene7.com/is/image/Target/GUEST_6016b06d-e8d6-403a-9e1d-1938f45bb1f7?wid=488&hei=488&fmt=pjpeg',
        time :6000
    },
    {
        id:1,
        name:'Beats',
        photo:'https://www.powerplanetonline.com/cdnassets/beats_studio3_wireless_decade_collection_negro_rojo_01_l.jpg',
        time : 10000
        
    }
]


class Ads extends Component{
    constructor(){
        super();
        this.state={
            // Adsdata:[], // for Mocking
            AdNo:0,
            Free:false,
            photo:[],
            name:[],
        };

        
    }

    componentDidMount(){
        //Mocking
        // fetch("http://127.0.0.1:8080/Adsdata.json")
        // .then((response) => response.json())
        // .then((users) => this.setState({ Adsdata: users }));
        this.AdsAnalyze()
        this.time = setInterval(() => {
            this.setState({AdNo:this.state.AdNo +1})
            if(this.state.AdNo === 2){
                this.setState({AdNo:0})
            }
        }, 5000);
       
    }
    
    
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
        return(
            <div className="ImLayout">
                <img alt={(this.state.name)[this.state.AdNo]} src={(this.state.photo)[this.state.AdNo]} width={550} height={150} />
            </div>
        )
    }

}




export default Ads;