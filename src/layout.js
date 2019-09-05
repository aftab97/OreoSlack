import React, { Component } from 'react'
import Timeline from './timeline'
import Navbar from './navbar'
import Header from './header'
import './layout.css'



export default class Layout extends Component {
    render() {
        return (
            <div>
                 <div className="backgroundcontainer">
            <Navbar />
            <Header />
            <Timeline />
                </div>
            </div>
        )
    }
}
