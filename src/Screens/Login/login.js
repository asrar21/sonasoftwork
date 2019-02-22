import React, { Component } from 'react';
//importing components from grommet
import { Grommet, Box, ResponsiveContext, Button, Image, Text, Heading, TextInput, Markdown } from "grommet";
//imported icon from assets/Icons Folder
import sonaLogo from "../../assets/Icons/sonaLogo.png"
//imported icon from grommeticons library
import { Login, CircleInformation } from 'grommet-icons';
//importing axios from axios library
import axios from 'axios'


class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      Password: '',
      Data: [],
      wrongPassword: ''
    }
  }
  Signin = () => {
    let headers = {
      'Content-Type': 'application/json',

    }
    let data = {
      Email: this.state.Email,
      Password: this.state.Password
    }
    axios.post('http://localhost:4001/getuser', data, { headers: headers })

      .then((response) => {
        console.log("resposne", response.data.data)
        this.setState({
          Data: response.data.data
        })

      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  email = (e) => {
    this.setState({
      Email: e.target.value
    })
  }
  password = (e) => {

    this.setState({
      Password: e.target.value
    })
  }

  render() {
    console.log('client Data', this.state.Data[0])
    this.state.Data && this.state.Data.length && this.state.Data.map(function (data, i) {
      console.log("PAssword", data.pasword)
      if (this.state.Password === data.pasword) {
        alert("you are authenthicated")
        this.props.history.push("/homescreen")

      }
      if (this.state.Password !== data.pasword) {
        alert("your Email address and password is wrong")
        this.props.history.push("/")

      }

    })
    const myTheme = {
      global: {
        font: {
          family: 'Roboto',
        },
        control: {
          border: {
            width: "2px",
          },
        },
      },


    }
    return (
      <div>
        {/* using Grommet to wrap all the grommet component */}
        <Grommet full theme={myTheme}>


          {/* main Box which holds all the boxes */}
          <Box
            fill
            pad="none"
            margin="none"
            direction="row"
            align="stretch"
            alignContent="stretch"
          >
            {/* to make the box responsive we used this */}
            <ResponsiveContext.Consumer>
              {(size) => (
                size === "medium" ? (
                  // sidebar box
                  <Box
                    fill
                    margin="none"
                    pad="medium"
                    background="#2e3c54"
                    direction="column"
                    justify="center"
                    height="xxlarge"
                    align="center"
                    alignContent="start"
                    alignSelf="stretch"
                    basis="1/4" >
                    <Box height="small" pad="small" width="small"  >
                      <Image src={sonaLogo} fit="contain" margin="small" alignSelf="center" />
                      <Text textAlign="center" size="small">Version 6.5.0.0</Text>
                    </Box>

                  </Box>


                )
                  : null

              )}
            </ResponsiveContext.Consumer>





            {/* box which contain textboxes ,labeling and icon button */}
            <Box

              justify="start"
              align="start"
              direction="column"
              background="white"
              pad="small"
              margin="none"
              basis="1"

              width={"100%"}

            >


              <Box
                justify="end"
                align="start"
                alignContent="start"
                width={"100%"}
                // basis="1"
                direction="row"
                margin="none"
                pad="none"

              >
                <CircleInformation margin="none" pad="none" textDecoration="none" />
              </Box>

              <Box
                basis="1"
                height="medium"
                width="300px"
                justify="end"
                margin="medium"
                // align="end"
                alignSelf="center"


              >
                <Heading
                  size="small"
                  alignSelf="start"
                >
                  <Markdown>**SonaVault Login**</Markdown>

                </Heading>
                <Text color="red">{this.state.wrongPassword}</Text>
                <Text alignSelf="start" size="medium">Email :</Text>
                <TextInput size="small" placeholder="Enter your email" name="Email" onChange={(event) => { this.email(event) }} />
                <Text alignSelf="start" size="medium">Password :</Text>
                <TextInput size="small" type="password" placeholder="Enter your password" name="Password" onChange={(event) => { this.password(event) }} />
                <Box pad="20px">
                  <Button
                    icon={<Login />}
                    label="sign in"
                    alignSelf="start"
                    plain="True"
                    onClick={this.Signin}
                  />
                </Box>
              </Box>

            </Box>


          </Box>



        </Grommet>
      </div>
    )
  }
}

export default LogIn;
