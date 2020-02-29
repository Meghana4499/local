import React ,{ Component } from 'react';

import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link } from "react-router-dom";
   import Login from "./components/home/login";
   import SignUp from "./components/home/signup";
   import Home from "./components/home/home";
   import UserHome from "./components/User/UserHome";
   import complaint from "./components/User/complaint";
   import Adminlogin from "./components/home/adminlogin.js"; 
   import About from "./components/home/about.js";
   import Adminhome from "./components/admin/Adminhome.js";
   import Profile from "./components/User/Profile.js";
   //import Leaflet from "./components/User/leaflet.js";
   import ViewUsers from "./components/admin/viewusers.js";
   import ViewComplaints from "./components/admin/viewComplaints.js"
   import PendingComplaints from "./components/admin/pendingComplaints.js"
   import ClosedComplaints from "./components/admin/closedComplaints.js"
   import UserLogout from "./components/User/logout.js"
   import ViewUserComplaints from "./components/User/viewComplaints.js"
   import PendingUserComplaints from "./components/User/pendingComplaints.js"
   import ClosedUserComplaints from "./components/User/closedComplaints.js"
   import AdminLeaderboard from "./components/admin/leaderboard.js"
   import viewAndClose from "./components/admin/viewAndClose.js"

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
            <Router>
                <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path='/' component={ Home } />
            <Route exact path='/Home' component={ Home } />
            <Route path="/Login" component={ Login } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path="/user-home" component={ UserHome }/>
            <Route path="/complaint" component={ complaint }/>
            <Route path="/adminlogin" component= { Adminlogin}/>
            <Route path="/about" component= { About }/>
            <Route path="/adminhome" component= { Adminhome }/>
            <Route path="/viewusers" component= { ViewUsers }/>
            <Route path="/profile" component= { Profile }/>
            <Route path="/viewcomplaints" component = {ViewComplaints}/>
            <Route path="/pendingcomplaints" component = {PendingComplaints}/>
            <Route path="/closedcomplaints" component = {ClosedComplaints}/>
            <Route path="/userLogout" component = {UserLogout}/>
            <Route path="/viewusercomplaints" component = {ViewUserComplaints}/>
            <Route path="/pendingusercomplaints" component = {PendingUserComplaints}/>
            <Route path="/closedusercomplaints" component = {ClosedUserComplaints}/>
            <Route path="/adminleaderboard" component = {AdminLeaderboard}/>
            <Route path="/viewandclose/:Cid" component = {viewAndClose}/>
                </Switch>
            </Router>
            </div>
        
  );
}}

export default App;
