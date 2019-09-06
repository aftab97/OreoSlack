import React from 'react';
import './MessagingPanel.css'

class MessagingPanel extends React.Component {
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

        // componentDidUpdate() {
        //   this.scrollToBottom()
        // }
        render() {
          return (

            <div className="container" id="messagecontainer">
            <input className="message-box" type="text" value={this.state.value} onChange={this.onChangeValue} onKeyPress={this.addItem} onFocus/>

                <div>
                  {this.state.thread.map((item) => (
                    <div className="cardcontainer" id="card">
                    <h4 className="inputusername">{this.props.username  + ":"}</h4>
                    <p className="message">{item}</p>
                    </div>
                
                    ))}
                      {/* <input type="text" value={this.state.value} onChange={this.onChangeValue} onKeyPress={this.addItem} onFocus/> */}

                
                </div>

            </div>
    )
  }

} 
export default MessagingPanel;



/* this works with the message box at the top */
/* <div>
<input className="message-box" type="text" value={this.state.value} onChange={this.onChangeValue} onKeyPress={this.addItem} onFocus/>

    <div>
  {this.state.thread.map((item) => (
    <div>
      <h4>{this.props.username  + ":"}</h4>
      <p>{item}</p>
    </div>
    
))}
<input type="text" value={this.state.value} onChange={this.onChangeValue} onKeyPress={this.addItem} onFocus/>

    
</div>

</div>
)
}

}  */