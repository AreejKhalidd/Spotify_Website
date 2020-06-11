import React from "react";
import  "./ForgetPassword.css";


    /*
this class make the user can change password
    */

class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         // newdetails:
            newpassword: "",
            code:"",
            codesend:false,
          changepass:false,
          confirmcode:false,
          formerrors: {
            newpassError: "",
            msg:"",
            codeError:"",
            donesendingcode:"",
          },
          donesaving:"",


            data:false, //will store the current code here


        };
    }
    /*
this Function take user data and his current email to send code to it 
    */
    componentDidMount(){
      const tokenn =localStorage.getItem('tokenfromlogin')
      let url2= process.env.URL + "/me";
      let url='http://localhost:4000/users';
      fetch(url,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-TYpe':'application/json',
          //'Authorization' :'Token'+tokenn
        }
      }).then((result)=> {
       result.json().then((resp) =>{
  
  this.setState({data:resp})
  console.log(this.state.data);
       })
      })
    } 
        
//this function check first if user enter the password correctly and then see what he want to change but first check if its not equal with his orginal details
    /**
   * saveEdit submission 
   * @function saveEdit
   * @param  {event} - submit event
   */
   saveEdit =e =>{  
    //e.preventDefault();     
    if(this.state.newpassError==="" && this.state.confirmcode===true){
               
                   this.setState({msg:""});
                    const tokenn =localStorage.getItem('tokenfromlogin' )                   
                     //let ur5l=process.env.URL + "/users/me";
                     let url='http://localhost:4000/users';
                     let data={
                      'password' :this.state.newpassword,
                      
                     }
                     fetch(url,{
                       method:'PATCH',
                       headers:{
                         'Content-Type':'application/json',
                         'Accept':'application/json',
                        // 'Authorization' :'Token'+tokenn
                       },
                       body:JSON.stringify(data)
                     }).then((result) => {
                    result.json().then((respp) =>{
                   console.warn("respp".respp)
                     this.setState({msg:"password is changed!"});
                    })
                     })
                   }
                   else{
                    this.setState({msg:"try again"});
                   }
                  

                   
       
        
      }
 
      /*
//this function send code to client email
*/  
        /**
    * make the server send to user email
    * @function sendcode
    * @param {event} e - onChange event
    */

sendcode =e=>{
  
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
this.setState({codesend:true});


}



        /**
    * this function cancel edits by refreshing the page
    * @function canceledit
    * @param {event} e - o button click
    */
cancelEdit =e =>{
window.location.reload(false);
}


      /**
    * this function save wriiten code by user
    * @function onChangecode
    * @param {event} e - on change input
    */ 
onChangecode =e =>{
this.setState({
 code: e.target.value
});

}

    /**
    * this function make user go to login page
    * @function gologin
    * @param {event} e - on button click
    */ 
gologin =e =>{
  window.location.href = "/";
  }


 /*
//his function take the code that user entered it and check it with fake server that it's the same code that server sent it to him torugh the email
*/ 
          /**
    * check that user enter correct code
    * @function checkcode
    * @param {event} e - onChange event
    */
checkcode =e=>{

  if(this.state.codesend===true)
  {
if(this.state.code===this.state.data.codeforresetpass)
{
this.setState({codeError:"the code is correct complete the form to change the password"});  
this.setState({confirmcode:true});  

}
else{
this.setState({codeError:"the code is not correct, try gain!"}); 
this.setState({confirmcode:false});  
}

}
else{
  this.setState({codeError:"press to send code first"});
  this.setState({confirmcode:false});   
}
}
/*
this function check if the password is strong enough
*/
        
/**
    * update the input from user
    * @function onChangenewpass
    * @param {event} e - onChange event
    */
  onChangenewpass = e => {
    this.setState({
      newpassword: e.target.value
    });
     let newpasserror = this.state.newpassError;
    newpasserror =
      e.target.value.length > 16 ||
      e.target.value.trim() === "" ||
      e.target.value.length === 0 ||
      e.target.value.length < 8
        ? "minimum 8 charchters And Maxmium 16 charchters are required to make strong password"
        : "";
    //this.state.passwordError=passworderror;
    this.setState({ newpassError: newpasserror });

    
  };


    render() {
      const data=this.state.data;
      console.warn(data);
     return(
         <div style={{paddingBottom:200}} className="forgetpassform"> 

            <h1> Reset Your Password...</h1>
                <h5 id="msgtomail">Click here to send a code to your email to can change your password</h5> 
               <button className="button3" onClick={this.sendcode}>Send Code</button>
                <div className="errormsg">{this.state.donesendingcode}</div>

            <br></br>

             <label className="labels">Write here the code</label>
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
        
        <label className="labels">Enter your new password </label>
         <br></br>
            <input
            onChange={this.onChangenewpass}
            type="password"
            
            name="newpass"
            className="forminput"
            id="newpassid"
            required="required"
          />
          <div className="errormsg">{this.state.newpassError}</div>
          <br></br>
          <div className="errormsg">{this.state.msg}</div>
          <div className="forbuttons">
          <button className="button1" onClick={this.cancelEdit }>Cancel</button>
   <button className="button2" id="editt" onClick={this.saveEdit }>Save New Password</button>
   <br></br> <br></br> 
   <h6> You can go to login!</h6>
   <button className="button3" onClick={this.gologin}>Go and login</button>
   </div>
 </div>        
 );}   
}
export default ForgetPassword;
