import React from "react";
import  "./Movetoprem.css";

    /*
this class make the user can change passwordd
    */

class Movetoprem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         // newdetails:
         confirmcode:false,
         code:"",
           codeError:"",
           donesendingcode:"",
            data:false, //will store the email,and the code that server send it to user
            msg:"",

        };
    }
    /*
this Function take user data to see if hee is type ->free
    */
    componentDidMount(){
     // const tokenn =localStorage.getItem('tokenfromlogin')
      //let url= process.env.URL + "/me";
      let url="http://127.0.0.1:8080/users.json";
      fetch(url,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-TYpe':'application/json',
        //  'Authorization' :'Token'+tokenn
        }
      }).then((result)=> {
       result.json().then((resp) =>{
  
  this.setState({data:resp})
       })
      })
      //
      /*
      .catch(function (error) {
        console.log(error);
        this.setState({donesendingcode:"some thing went wrong please try again!"});
     
  
      });
         */
        //
    } 
    
           /**
    * this function call the API to make the server send mail to the user email
    * @function sendcode
    * @param {event} e - onChange event
    */
   
      sendcode =e=>{
        //first check if he is prem
        if(this.state.data.type==="free")
           {   
             /*
           //make request with api to send code by giving them the email
           const tokenn =localStorage.getItem('tokenfromlogin')
                 
  let urltosendemail=process.env.URL +"/users/me";
  let data={
    'email':this.state.data.email,
    
  }
  fetch(urltosendemail,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization' :'Token'+tokenn  
    },
    body:JSON.stringify(data)
  }).then((result) => {
 result.json().then((respp) =>{
 console.warn("respp".respp)
  this.setState({donesendingcode:"the code is sent"});
 // console.log(this.state.data.email)
 })
  })
  //done
  .catch(function (error) {
    console.log(error);
    this.setState({donesendingcode:"some thing went wrong please try again!"});
  });
  //
  */
 this.setState({donesendingcode:"the code is sent"});
 }

 else{
     this.setState({codeError:"You are already Premium!"})
     }
          
 }

   

          /**
    * cancel what user make in the page by refreshing it
    * @function cancelEdit
    * @param {event} e - onChange event
    */
cancelEdit =e =>{
    window.location.reload(false);
   }

   
       /*
//rhis function save the written code
  */  
           /**
    * update the input from user
    * @function onChangecode
    * @param {event} e - onChange event
    */
 onChangecode =e =>{
   this.setState({
       code: e.target.value
     });

}
       /*
//his function take the code that user entered it and check it with fake server that it's the same code that server sent it to him torugh the email
  */ 
           /**
    * check the user input codes is correct
    * @function checkcode
    * @param {event} e - onChange event
    */
checkcode =e=>{

if(this.state.code===this.state.data.codeforprem)
{
  this.setState({codeError:"the code is correct complete the move to premium"});  
  this.setState({confirmcode:true});  
  
}
else{
  this.setState({codeError:"the code is not correct, try gain!"}); 
  this.setState({confirmcode:false});  
}
};



/*
this function change user type
*/
          /**
    * change user type in his details
    * @function moveprem
    * @param {event} e - onChange event
    */
moveprem =e =>{  
    //e.preventDefault();     
               if(this.state.confirmcode===true){
                this.setState({msg:"you are know premium!"});
                    //const tokenn =localStorage.getItem('tokenfromlogin' )                   
                    let ur5l=process.env.URL + "/users/me";
                     let l="http://127.0.0.1:8080/users.json";
                     let data={
                      'type' :"premium",
                      
                     }
                     fetch(l,{
                       method:'PATCH',
                       headers:{
                         'Content-Type':'application/json',
                         'Accept':'application/json',
                       //  'Authorization' :'Token'+tokenn
                       },
                       body:JSON.stringify(data)
                     }).then((result) => {
                    result.json().then((respp) =>{
                   console.warn("respp".respp)
                     this.setState({msg:"you are know premium!"});
                    })
                     })
                     .catch(function (error) {
                      console.log(error);
                      //this.setState({msg:"some thing went wrong please try again!"});
                    });
                   }
                   else{
                    this.setState({msg:"try again!"});
                   }
                  }



    render() {
      const data=this.state.data;
      console.warn(data);
       return(

         <div style={{paddingBottom:200}} className="Movetoprem"> 


         <br></br>
         <br></br>
            <h1>Move to PREMIUM ??</h1>
              
            <br></br>
           <label className="labels">Click here to send code to your email</label>
           <br></br>
           <button className="button6" onClick={this.sendcode}>Send Code</button>
           <div className="errormsg">{this.state.donesendingcode}</div>   
          <label className="labels">Write the code here</label>
          <br></br>
               <input
               onChange={this.onChangecode}
               type="text"
               name="code"
               className="forminput"
               id ="codeid"
               required="required"
               />
          <br></br>
          <br></br>
          <label className="labels">Click here and wait to check the code..</label>
            <button className="button3" onClick={this.checkcode }>Check Code</button>
            <div className="errormsg">{this.state.codeError}</div>
            <br></br>



            <button className="button1" onClick={this.moveprem}>MovetoPremium</button>
            <button className="button5" onClick={this.cancelEdit }>Cancel</button>
            <div className="errormsg">{this.state.msg}</div>
           </div>        
 );}
       
    
}
export default Movetoprem;
