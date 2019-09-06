import React, { Component } from 'react'
import './header.css'
// import { Button } from 'react-native-elements';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// 'react-native-vector-icons/FontAwesome'




export default class Header extends Component {
state = {
   
}

    render() {
        return (
            
                <div className="header">
                        <div className="headercontainer">  
                            <div className="headerbox">
                            <div className="searchbox">
                            
                           
                        
                    
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></link>

                            <div className="leftSettings">
                                <ul>
                                <div id="messageid">Message ID</div>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-circle" aria-hidden="true"></i>
                                        <li>active</li> 
                                        
                                       
                                </ul>
                               
                            <div className="rightSettings">
                                <ul>
                                <i class="fa fa-phone" aria-hidden="true"></i>

                                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                                   
                                        <i class="fa fa-cog" aria-hidden="true"></i>

                                        <button onClick = {this.searchtype}> Search</button>
                                  
                                        <i class="fa fa-at" aria-hidden="true"></i>
                                   
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                  
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                   
                                        <i class="fa fa-gift" id="gift" aria-hidden="true"></i>
                                  
                                </ul>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                </div>
        )
    }
}



