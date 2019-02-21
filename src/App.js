import React, { Component } from 'react'
//imported homescreen from screens folder
import HomeScreen from './Screens/HomeScreen/homeScreen'
import LogIn from './Screens/Login/login';

export default class App extends Component {

  navigateToHomeScreen = () => {
    this.setState({
      homeScreen : true
    })
  }

  render() {
    const homeScreen = this.state
    return (
      <div>    
        {/* {!homeScreen && <LogIn navigateToHomeScreen={this.navigateToHomeScreen}/>}     */}
        {!homeScreen && <HomeScreen />}
      </div>
    )
  }
}
