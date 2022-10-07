import React, { Component } from 'react';

import CaseStatusContract from "../contracts/CaseStatusContract.json";
import getWeb3 from "../utils/getWeb3";


class CaseStatusUpdate extends Component 
{
    state = {buffer: null, web3: null, accounts: null, contract: null,
               case_id: '',
               exhibit_name: '',
               desc:'',
               timestamp:''
      }; 

      constructor(props)
      {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();           
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();      
    
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = CaseStatusContract.networks[networkId];
          const instance = new web3.eth.Contract(
            CaseStatusContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log(deployedNetwork.address);    
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance }, this.runExample);
          this.onGetDate();
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };
    
        
    
          onSubmit(event) {
            const { accounts, contract } = this.state;
            event.preventDefault()
            this.onGetDate();
            this.state.case_id = this.props.routeParams.caseId;
            contract.methods.addReport(this.state.case_id, this.state.exhibit_name, this.state.desc, this.state.timestamp).send({ from: accounts[0] });  
            alert("Please confirm transaction in MetaMask"); 
          }
  

    onGetDate() {
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        var hour = (date.getHours() + 100).toString().substring(1); 
        var mins = (date.getMinutes() + 100).toString().substring(1);
        var sec = (date.getSeconds() + 100).toString().substring(1);    
        this.setState({
            timestamp : year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec
        });
        // console.log(year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec);
      }
    render()
    {
        
        var crimeId = this.props.routeParams.caseId;
        
        return(
            <div>
            <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
            <b><a href="/" className="brand-logo">Case Tracker</a></b>
               <ul className = "right">
                   <li active><a href = "/viewcase">View Cases</a></li>
                   <li active><a href = "/trackcase">Track Cases</a></li>
                   <li><a href = "/">Log out</a></li>
               </ul>
            </div>
            
        </nav>
            <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"25px"}}>Update Case Status</h4>
            <div className="container">
            <form onSubmit={this.onSubmit} id="donateForm" className="donate-form">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="report_type">CASE ID</label>
                            <input value = {this.props.routeParams.caseId} className="form-control" readOnly type="text" id="case_id" name="case_id" placeholder="Enter case id" onChange={(evt) => { this.state.case_id =  evt.target.value; }} required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="company">CASE STATUS</label> 
                            <input className="form-control" type="text" id="exhibit_name" name="exhibit_name" placeholder="" onChange={(evt) => { this.state.exhibit_name =  evt.target.value; }} required />
                        </div>
                    </div>                    
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="par_rem">NOTES</label>
                            <input className="form-control" type="text" id="desc" name="desc" placeholder="" onChange={(evt) => { this.state.desc =  evt.target.value; }} required />                                    
                        </div>
                    </div>
                </div>
                <div className="row">  
                <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="fee">TIMESTAMP</label>
                            <input value={this.state.timestamp} className="form-control" readOnly type="text" id="timestamp" name="timestamp" onChange={(evt) => { this.state.timestamp =  evt.target.value; }} placeholder="2019-08-03 20:45" required />
                        </div>
                    </div>                                                        
                    <div className="form-submit">
                        <button type="submit" className="dropbtn1" style={{marginTop:"10px"}}>Upload to Blockchain</button>  
                    </div>   
                </div>                                                                                   
            </form>     
            </div>
            </div>
        )

    }
}

export default CaseStatusUpdate;