import React, { Component } from 'react'
import styles from "../components/home.module.css";
class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            userName: "Pawan",
            
        }
    }
    changeState = () => {
        this.setState({
            userName:this.state.userName==="Pawan"?"Yadav":"PawanYadav",
        })
    }
  render() {
    return (
      <div className={styles.container1}>
            <h2> {this.state.userName}</h2>
            <button onClick={this.changeState}>
                Change
            </button>
      </div>
    );
  }
}
export default Home;
