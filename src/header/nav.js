import React, { Component } from "react";

import './nav.css'

class Nav extends Component{

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `/search/`;
    this.props.history.push(path);
  }

  render() {
    return (
       

  
 
<div className="topnav">
 
  <a href="Createeve">Create Event</a>
  <a href="Login">My Account</a>
  <a href="Location">Select Location</a>
  <input className="search" type="text" placeholder="Search Events.."></input>
  
 
 

  <button type="submit" onClick={this.routeChange}>Search</button>
 

</div>



);
}
}
export default Nav;