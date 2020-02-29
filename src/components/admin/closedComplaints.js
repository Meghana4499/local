import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './adminhome.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Nav  from './nav.js';
import img from '../images/userlogin.jpeg';
import UserProfile from '../User/UserProfile';
import {createBrowserHistory} from 'history';


var body;
let token="";
var result;

class closedComplaints extends Component{
  constructor(props) {
    super(props);
    this.state={
      complaints :[]
    }
    
  }

  indexN(cell, row, enumObject, index) {
    return (<div>{index+1}</div>) 
} 
  componentDidMount() {
  
    console.log(body);
    
   
        const url = "http://localhost:9000/closedComplaints";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'GET',
            body: JSON.stringify(body)
          })
          .then(response => {if(response.ok){
            // UserProfile.setEmail(this.state.email);
            response.json()
            .then(res=> {
              console.log(res)
              this.setState({
                  complaints : res
              })          
            })
          }
          else if(!response.ok){
            console.log("Wrong email or password")
            alert("Wrong email or password")
          }
          })
    
        //   .then(response => {
        //       console.log(response.json())
        //   })
          {/*}.catch((error)=> {console.log("can't access" + url + "response. " +error )},
            alert("Wrong email or password"))*/}

          
      
    } 

    render() {
        
      return (
        <div>
            <div className="wrapper">
            <Nav/>
            <br></br><br/>
            <br/>
                    <div className="main_content">
                        <div className="header"><h2><u>Closed Complaints</u></h2></div>
          <BootstrapTable data={ this.state.complaints } striped hover condensed>
          <TableHeaderColumn dataField="any" dataFormat={this.indexN} isKey>S.No</TableHeaderColumn>
          {/* <TableHeaderColumn width='150' dataField='Cid' isKey>CID</TableHeaderColumn> */}
          <TableHeaderColumn  width='150' dataField='Email'>EMAIL</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Category'>CATEGORY</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Image'>IMAGE</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Location'>LOCATION</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Timestamp'>TIMESTAMP</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Description'>DESCRIPTION</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Status'>STATUS</TableHeaderColumn>
          
      </BootstrapTable>
            
          </div></div></div>
        );
    }
}
export default withRouter(closedComplaints);