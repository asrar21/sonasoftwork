import React, { Component } from 'react'
//imported homescreen from screens folder
import HomeScreen from '../Screens/HomeScreen/homeScreen'
import LogIn from '../Screens/Login/login';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class Routers extends Component {

  

  render() {
    
    return (
      <Router>
    <div>
      

      <Route exact path="/" component={LogIn} />
      <Route path="/homescreen" component={HomeScreen} />
      
    </div>
  </Router>
    )
  }
}
