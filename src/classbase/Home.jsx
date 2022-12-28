import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            userName: "Pawan",
            
        }
     }
  render() {
    return (
        <div>
            {this.state.userName}
      </div>
    )
  }
}
export default Home;
