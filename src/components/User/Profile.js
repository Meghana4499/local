import React, { Component } from "react";
import logo from '../images/userhome.jpg';
import '../images/bgimage.css';
import './UserHome.css'
import Nav from './nav.js';
import img from '../images/userlogin.jpeg';
const image = {
  backgroundImage: 'url(' + img + ')',
  width: "100%",
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
}
var body;
export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
       
        this.handleUpdate = this.handleUpdate.bind(this);
        //this.validateForm = this.validateForm.bind(this);
    
        //
      this.state = {
        name:"",
        email : "",
        mobile : ""
      }
        
    this.state={
      userdetails :[]
    
    }
    
  }
  componentDidMount(){
    console.log(this.state.Id);
    var body = {
      id: sessionStorage.getItem("Identity")
    }
    console.log("Body"+body.Id);

        const url = "http://localhost:9000/details";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
          })
          .then(response => {if(response.ok){
            // UserProfile.setEmail(this.state.email);
            response.json()
            .then(res=> {
              console.log("Response:"+res)
              this.setState({
                  userdetails : res
              })          
            })
          }
          
          })
          console.log(body);
             
    } 
    handleNameChange = event => {
      this.setState({
        name : event.target.value
      });
      console.log(this.state.name);
    }
    handleEmailChange = event => {
      this.setState({
        email : event.target.value
      });
     
    }
    handleMobileChange = event => {
      this.setState({
        mobile : event.target.value
      });
     
    }
    
    handleUpdate(event) {
      console.log("sample"+this.state.image);
      event.preventDefault();
      body = {
        
        Name: this.state.name,
        Email: this.state.email,
        Mobile: this.state.mobile,
        
        
      }
      console.log(body);
      if (this.state.name==""){
        alert('Please select the image')
      }
      else if(this.state.email==""){
        alert('Please select the image')
      }
       else if (this.state.mobile==""){
        alert('Please select the image')
      }
    
      else{
         const url = "http://localhost:9000/complaint";
         let headers = new Headers();
   
         headers.append('Content-Type','application/json');
         headers.append('Accept','application/json');
   
         headers.append('Access-Control-Allow-origin',url);
         headers.append('Access-Control-Allow-Credentials','true');
   
         headers.append('GET','POST');
   
         fetch(url, {
          headers:headers,
          method: 'POST',
          body: JSON.stringify(body)
       })
        .then(response => response.json())
        .then(contents => {console.log(contents);
        // .then(response =>{window.location.href="/Login"});             
     })
   .catch(()=> console.log("can't access" + url + "response. "))
      }
  
    
    }

    render() {
        return (
        // <div className="wrapper">

        //     <Nav/>
        //     <br></br><br/>
        //     <br/>
        //     <div className="main_content">
        //     <h2><u>Users</u></h2>
        //     <div class="pcontainer">
        //     <form>
        //             <div class="collabel">
        //                 <h3>ID: {this.state.userdetails.Id}</h3>
        //             </div>
        //             <div class="collabel">
        //                 <h3>Name: {this.state.userdetails.Name}</h3>
        //             </div>
        //             <div class="collabel">
        //                 <h3>Email : {this.state.userdetails.Email}</h3>
        //             </div>
                    
        //             <div class="collabel">
        //               <h3>Mobile : {this.state.userdetails.Mobile}</h3>
        //             </div>      

        //     </form>
        // </div>
        // </div>
        //   </div>
          <div style={image}>
<div className="wrapper">
          <Nav/>
                      <br/><br/><br/>
                      <br/>
                      <div class="main_content">
                    <center>
                      <div className="auth-wrapper">
                      <div className="auth-inner">
                         
                      <form>
                          <h3>Profile</h3>
                          <div className="form-group">
                              <label>ID:</label>
                              <input type="text" name="email"  className="form-control"   value={this.state.userdetails.Id}
                             />
                               
                          </div>
                          <div className="form-group">
                              <label>Name:</label>
                              <input type="text" name="name"  className="form-control" onChange={this.handleNameChange} value={this.state.userdetails.Name} isEditable
                             />
                               
                          </div>
                          <div className="form-group">
                              <label>Email address</label>
                              <input type="text" name="email"  className="form-control" onChange={this.handleEmailChange} value={this.state.userdetails.Email}
                             />
                               
                          </div>
          
                          <div className="form-group">
                              <label>Mobile</label>
                              <input type="text" name="mobile" className="form-control" onChange={this.handleMobileChange} value={this.state.userdetails.Mobile}
                             />
                               
                          </div>
          
                          
          
                          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleUpdate}>Update</button>          
                      </form>
                      </div>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      </div>
                      </center>
                      </div>
                     </div>
                      </div>
        );
    }
}
