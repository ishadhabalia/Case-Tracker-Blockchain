import React, { Component } from 'react';
import '../CSS/login.css'
import notesCover from '../Images/bgimg.jpeg';
import {browserHistory} from 'react-router';

class Login extends Component {
    componentDidMount(){
        document.title = "Login"
    };
    state = {
        username:'',
        password:'' 
    };
    validate = (state) =>{
        var uname = this.state.username;
        var pass =  this.state.password;
        if(uname==null || uname == '' || pass==null || pass=='')
            {
                alert("Username / Password Missing!!!");
            }
        else
            {
                if((uname=="PO1234") && (pass=="1234"))
                {
                    browserHistory.push('/viewcase');
                }  
                else if( (uname=="SO1234") && (pass=="1234"))
                {
                    browserHistory.push('/trackcase');
                } 
                else
                {
                    alert("Wrong Username or Password");
                    browserHistory.push('/');
                }    
            }
    };
    render()
    {
        return(
            <div className = "container signInCard center">
            <div className="card setCardWidth">
            <div className="card-image ">
              <img src={notesCover} alt="Notes" className = "cardImageHeight"/>
            </div>
          <div className="signInContainer card-content">
              <h4 className="grey-text card-title">Sign In</h4>
              <form onSubmit={this.submitted} className="signInForm">
                  <div className="input-field">
                      <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
                      <input type="text" id="email" onChange={(evt) => { this.state.username =  evt.target.value; }}/>
                      <label htmlFor="loginID">Login ID</label>
                  </div>
                  <div className="input-field">
                      <i className="material-icons prefix grey-text text-darken-3">lock</i>
                      <input id="password" type="password" onChange={(evt) => { this.state.password =  evt.target.value; }}></input>
                      <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field row">
                      <p className="col s6">
                          <label>
                              <input name="dept" type = "radio" value = "police"/>
                              <span>Police Officer</span>
                          </label>
                      </p>
                      <p className="col s6">
                          <label>
                              <input name="dept" type = "radio" value = "forensics"/>
                              <span>SHO</span>
                          </label>
                      </p>
                      
                  </div>
                  <div className="input-field center card-action">
                      <button className="btn grey darken-3" onClick={this.validate}>Sign In!</button>
                  </div>
              </form>
            </div>
          </div>
            </div>
        )
    }
}

export default Login;