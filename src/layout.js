import React, { Component } from 'react'
import Timeline from './timeline'
import Navbar from './navbar'
import Header from './header'
import './layout.css'



export default class Layout extends Component {
    state = {
        username: this.props.username,
        value: "",
        thread: []
      }
    onChangeValue = event => {
      this.setState({value: event.target.value})
    }
    addItem = (event) => {
      if(event.key === "Enter") {
        this.setState(state => {
          let thread = state.thread.concat(state.value);
          return {
            thread,
            value: ""
          }
        })
      }
    }

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
