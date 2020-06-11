import React from "react";
import  "./EditPassword.css";

    /*
this class make the user can change passwordd
    */

class EditPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         // newdetails:
            newpassword: "",
            currentpassword:"",

          passwordtrue:false,
          changepass:false, //to make sure  new password is strong
          confirmpass:false,
          formerrors: {
            newpassError: "",

            msg:"",
          },
          donesaving:"",


            data:false, //will store the current (old)password here
            

        };
    }
    /*
this Function take user data and his current password and fetch it
    */
   componentDidMount(){
    // const tokenn =localStorage.getItem('tokenfromlogin')
     //let url= process.env.URL + "/me";
     let url="http://localhost:4000/users";
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
 
       //
   }
    
        
//this function check first if user enter the password correctly and then see what he want to change but first check if its not equal with his orginal details
    /**
   * saveEdit submission 
   * @function saveEdit
   * @param  {event} - submit event
   */
   saveEdit =e =>{  
    //e.preventDefault();     
    console.log(this.state.data.email);
    if(this.state.currentpassword===this.state.data.password ){
      if(this.state.newpassword===this.state.data.password ){
        this.setState({msg:"your enter new password the same as old"});
        return;
      }
      //console.log("paswwordahhhh");
               if(this.state.newpassError===""){
                this.setState({msg:""});
                    //const tokenn =localStorage.getItem('tokenfromlogin' )                   
                     let ur5l=process.env.URL + "/users/me";
                     let l="http://localhost:4000/users";
                     let data={
                      'password' :this.state.newpassword,
                      
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
                     this.setState({msg:"password is changed!"});
                    })
                     })
                  }
                  
                
              }
              
        else{
          this.setState({msg:"the password is not correct"});
        }

      }
    


   

  /**
   * cancelEdit submission its only refresh the page
   * @function cancelEdit 
   * @param  {event} - submit event
   */
    cancelEdit =e =>{
      //refresh
      window.location.reload(false);
    }
          /**
    * update and save the entered password to use it to check if its correct
    * @function onChangepassword
    * @param {event} e - onChange event
    */
    onChangepassword = e => {
        this.setState({
          currentpassword: e.target.value
        });
      }


              /**
    * update the input from user of the new password he want
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
   
    this.setState({ newpassError: newpasserror });
 
  };


    render() {
      const data=this.state.data;
      console.warn(data);




       return(

         <div style={{paddingBottom:200}} className="editpassform"> 


         <br></br>
         <br></br>
            <h1> Edit Your Password</h1>
            <br></br>
           <label className="labels">Current Password</label>
           <br></br>
           
            <input
            onChange={this.onChangepassword}
            type="password"
            name="newpassword"
            className="forminput"
            id ="passid"
            required="required"
          />
          <div className="errormsg">{this.state.passError}</div>
          <br></br>
        
          <label className="labels">New Password</label>
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
              
          <button className="button1" onClick={this.cancelEdit }>Cancel</button>
   <button className="button2" onClick={this.saveEdit }>Save New Password</button>
          

           </div>        
 );}
       
    
}
export default EditPassword;
//  //#1db954;