import React, { Component } from 'react'
import styles from "../components/home.module.css";
class Home extends Component {
    constructor(props) {
        super();
        this.state = {
          userName: "Pawan",
          todoItems: [
            { action: "Buy Phone", done: false },
            { action: "Buy sim", done: true },
            { action: "Dentist at 5 pm", done: false },
          ],
        };
    }
    changeState = () => {
        this.setState({
            userName:this.state.userName==="Pawan"?"Yadav":"PawanYadav",
        })
    }
    todoRows= () =>
        this.state.todoItems.map((item) => (
            <tr key={item.action}>
                <td>{item.action}</td>
            </tr>
        ))
  render() {
    return (
      <div className={styles.container1}>
            <h2> {this.state.userName}</h2>
            <button onClick={this.changeState}>
                Change
            </button>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>{this.todoRows() }</tbody>
                </table>
            </div>
      </div>
    );
  }
}
export default Home;
