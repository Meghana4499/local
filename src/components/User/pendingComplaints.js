import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './UserHome.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Nav  from './nav.js';

class pendingComplaints extends Component{
  constructor(props) {
    super(props);
    this.state={
      complaints :[]
    }
}

indexN(cell, row, enumObject, index) {
  return (<div>{index+1}</div>) 
}
componentDidMount(){
  var body = {
    id: sessionStorage.getItem("Identity")
  }
  console.log("Body"+body.id);

      const url = "http://localhost:9000/userPendingComplaints";
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
                complaints : res
            })          
          })
        }
        
        })
        console.log(body);
        console.log("Body"+body.id);
           
  } 
  

    render() {
        
      return (
        <div>
            <div className="wrapper">
            <Nav/>
            <br></br><br/>
            <br/>
                    <div className="main_content">
                        <div className="header"><h2><u>Pending Complaints</u></h2></div>
          <BootstrapTable data={ this.state.complaints } striped hover condensed>
          <TableHeaderColumn dataField="any" dataFormat={this.indexN} isKey>S.No</TableHeaderColumn>
          {/* <TableHeaderColumn width='150' dataField='Cid' isKey>CID</TableHeaderColumn> */}
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
export default withRouter(pendingComplaints);