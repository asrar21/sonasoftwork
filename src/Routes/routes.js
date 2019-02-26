import React, { Component } from 'react'
//imported homescreen from screens folder
import HomeScreen from '../Screens/HomeScreen/homeScreen'
import LogIn from '../Screens/Login/login';
//importing Configuration from screens and configuration folder
import Configuration from '../Screens/Configuration/configuration';
//importing notification from screens and configuration folder
import Notification from '../Screens/Configuration/Notification/notification';
import * as settings from "../Screens/Settings";
import ActivateProduct from '../Screens/Maintenance/activateProduct'
import PurgePolicy from '../Screens/Maintenance/purgePolicy'
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class Routers extends Component {

  render() {
    
    return (
      <Router>
    <div>
      

      <Route exact path="/" component={LogIn} />
      <Route path="/homescreen" component={HomeScreen} />
      <Route path="/configuration" component={Configuration} />
      <Route path="/notification" component={Notification} />
      <Route path="/settings/emailServer" component={settings.emailServer} />
      <Route path="/settings/archivalPolicy" component={settings.ArchivalPolicy} />
      <Route path="/settings/contentIdentificationPolicy" component={settings.contentIdentificationPolicy} />
      <Route path="/activateProduct" component={ActivateProduct} />
      <Route path="/purgePolicy" component={PurgePolicy} />
    </div>
  </Router>
    )
  }
}


