import React, { Component } from 'react'
import CaseStatusList from './CaseStatusList.js'

class TrackCase extends Component 
{
    render(){
        return(
            <div>
                <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
            <b><a href="/" className="brand-logo">Case Tracker</a></b>
               <ul className = "right">
                   <li active><a href = "/trackcase">Track Cases</a></li>
                   <li><a href = "/">Log out</a></li>
               </ul>
            </div>
            
        </nav>
                <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>Case Status</h4>
                <div className = "container homeList center">
                <div className="card blue darken-3 headers">
                    <div className="row ">
                        <div className="col s3 white-text  ">
                            <h6>Case ID</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Case Status</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Notes</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Timestamp</h6>
                        </div>
                    </div>
                </div>
                <CaseStatusList/>
            </div>
            </div>
        )
    }
}

export default TrackCase;