import React from 'react';

class Login extends React.Component {
   login = (e) => {
       e.preventDefault()
       this.props.setUsername(e.target.username.value)
   }
   render() {
       return(
           <div id="Login">
               {/* where we insert our username */}
               <form onSubmit={this.login}>
                   <label>Username:</label><br/>
                   <input type="text" id="username"/><br/>
                   <input type="submit" value="Login"/>
               </form>
           </div>
       )
   }
}
export default Login;