import React, { Component } from 'react'
//imported homescreen from screens folder
import  HomeScreen from './Screens/HomeScreen/HomeScreen'
import LogIn from './Screens/Login/login';

export default class App extends Component {

  render() {
    return (
      <div>    
        <LogIn/>    
      </div>
    )
  }
}
