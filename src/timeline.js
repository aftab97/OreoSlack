import React, { Component } from 'react'
import './timeline.css'
// import Thread from './thread'
import Login from './Login'
import MessagingPanel from './MessagingPanel'





export default class Timeline extends Component {
    state = {
        username: null
      }
      setUsername = (username) => {
        this.setState({username})
      }

    render() {
        return (
            <div className="timelinecontainer"> 
                {/* this shows the login component only if null otherwise show the messaging panel */}
       {!this.state.username ?
         <Login setUsername={this.setUsername}/> : <MessagingPanel username={this.state.username}/>
       }

            </div>
        )
    }
}

