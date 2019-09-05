import React, { Component } from 'react'
import './timeline.css'
import Thread from './thread'




export default class Timeline extends Component {
    render() {
        return (
            <div className="timelinecontainer"> 
                <Thread className="timelinebox"/>
            </div>
        )
    }
}

