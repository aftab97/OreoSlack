import React, { Component } from 'react'
import './navbar.css'






export default class Navbar extends Component {
    render() {
        return (
            <div>
                       <div className="navbar">
                        <div className="navbarcontainer"> 
                        <div className="navbarbox">
                        <div id="title">MasterCoding8</div> 
                           <div id="username">Username</div>
                        
                        <div className="draftscontainer" id="userdraft">
                        <h2>Drafts</h2>
                        <div id="username">Username</div>
                        </div>

                        <div className="channelscontainer" id="channels">
                        <h2>Channels</h2>
                            {/* <i class="fa fa-plus-circle" id="channelsplus" aria-hidden="true"></i> */}
                            <h3># channelone</h3>
                            <h3># channeltwo</h3>
                            <h3># channelthree</h3>
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></link>
                            <h4>+ Add a channel</h4>

                            </div>



                        <div className="directMessages" id="messageContacts">
                        <h2>Direct Messages</h2>
                        <li><i class="fa fa-circle" aria-hidden="true">   Aftab</i></li>
                        <li><i class="fa fa-circle" aria-hidden="true">   Fiona</i></li>
                        <li><i class="fa fa-circle" aria-hidden="true">   Raphaella</i></li>
                        <li><i class="fa fa-circle" aria-hidden="true">   Gillian</i></li>
                        
                        </div>


                        <div className="appscontainer" id="apps"><h2>Apps</h2></div>
                        

                           
                        




                        </div>
                        </div>
                        </div>
            </div>
        )
    }
}

