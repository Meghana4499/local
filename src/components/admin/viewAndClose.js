import React, { Component } from "react";
import img from '../images/complaint.jpg';
import Nav from './nav.js';



// const image = {
//     backgroundImage: 'url(' + img + ')',
//     width: "100%",
//     height: '100%',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '100% 100%',
//   }
  var body;
  
export default class complaint extends Component {
    constructor(props) {
        super(props);     
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.validateForm = this.validateForm.bind(this);
    
        //
      
        this.state = {
          image:"",
          description:"",
         
          //confirmPassword: ""
          
        };
    
      }
     CurDateTime() {
        var tempDate = new Date();
       var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currDate = "Current Date= "+date;
        console.log(currDate);
        return (
          // <p>{currDate}</p>
          date
        );
      }
      
    
      handleImageChange = event => {
        this.setState({
          image : event.target.value
        });
        console.log(this.state.image);
      }
    
      handleDescriptionChange = event => {
        this.setState({
          description : event.target.value
        });
      }
    
    
    
      handleSubmit(event) {
        console.log("sample"+this.state.image);
        event.preventDefault();
        body = {
          Cid: this.props.match.params.Cid,
          Image: this.state.image,
          Description: this.state.description,
          Timestamp : this.CurDateTime(),
          Status : "Closed",
        }
        console.log(body);
        if (this.state.image==""){
          alert('Please select the image')
        }
        
        else if(this.state.description==""){
          alert('Please enter the description')
        }
        else{
           const url = "http://localhost:9000/viewandclose";
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
         .then(response => {if(response.ok){
            // UserProfile.setEmail(this.state.email);
            // .then(res=> {
            //   console.log(res.id)
            //   sessionStorage.setItem("Identity",res.id);
            //   console.log("Email:"+res.Email)
            //   sessionStorage.setItem("EmailId",res.Email);
            //   sessionStorage.setItem("UserName",res.Name);
            //   window.location.href="/user-home";
            // })
            console.log(response);
            alert("Closed successfully");
          }
          else if(!response.ok){
            alert("Problem in closing");
          }
          })
          // .then(response =>{window.location.href="/Login"});             
       
     .catch(()=> console.log("can't access" + url + "response. "))
        }
    
      
      }
    
    render() {
      // var eid=this.props.match.params.id;
      // console.log(eid);
      var identity = sessionStorage.getItem("Identity");
      var emailid = sessionStorage.getItem("EmailId");
      console.log("session storage:"+identity+" : "+emailid);
      
        return (
            <div class="wrapper">
               <Nav/>      
                <div class="main_content">
                    <center>
                    <div class="header"><b>Closing Complaint</b></div>  
                    <br/><br/>
                    <div class="info">
                    <div className="auth-wrapper">
    <div className="auth-inner">
    <div>
            <form>

                <div className="form-group">
                    Upload Image:
                    <input type="file" name="image" value = {this.state.image} onChange={this.handleImageChange} />
                </div>
                <div className="form-group">
                    <label>Description:</label><br></br>
                    <textarea cols={33} rows={4} name="description" onChange={this.handleDescriptionChange} value={this.state.description}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>        
            </form>
        </div>
        </div>
            </div>
                    </div>
                    </center>
                     
                    
                    </div>
            
          </div>  
            
        );
    }
}