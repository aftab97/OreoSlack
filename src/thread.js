import React from 'react'

class Thread extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "Username",
        value: "",
        thread: ['a', 'b', 'c']
      }
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
          {this.state.thread.map((item) => (
            <div>
            <h4>{this.state.username}</h4>
            <p>{item}</p>
            </div>
            
          ))}
          <input type="text" value={this.state.value} onChange={this.onChangeValue} onKeyPress={this.addItem} onFocus/>
        </div>
      )
    }
  }
  
  
  
  export default Thread;
  