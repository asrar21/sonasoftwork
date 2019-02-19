import React,{Component} from 'react';
import './login.css'
class Login extends Component{
  constructor() {
    super()
    this.state = {
    }  
}
 click=()=>{
}
 render(){
  return (
      <div className="para"> 
      <div className="side">
      </div>
           <form> 
              <div> 
                <h1> SonaVault Login</h1> 
                  <label >Email:</label><br/> 
                  <input /> 
              </div> 
              <div> 
                  <label >Password:</label><br/> 
                  <input /> 
              <button onClick={this.click} className="b">Sign in</button>
              </div> 
              </form> 
           </div> 
      
    );
  }
}
export default Login