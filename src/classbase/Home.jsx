import React, { Component } from 'react'
import styles from "../components/home.module.css";
import { Navbar } from './Navbar';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: "Pawan",
          todoItems: [
            { action: "Buy Phone", done: false },
            { action: "Buy sim", done: true },
            { action: "Dentist at 5 pm", done: false },
            ],
          newTodo:"",
        };
    }
    updateValue = (e) => {
        this.setState({ newTodo: e.target.value });
        
    }
    changeState = () => {
        this.setState({
            userName:this.state.userName==="Pawan"?"Yadav":"PawanYadav",
        })
  }
  toggleDone = (todo) => 
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item),
    });
    todoRows= () =>
        this.state.todoItems.map((item) => (
            <tr key={item.action}>
            <td>{item.action}</td>
            <td>
              <input type="checkbox"
                checked={item.done}
                onChange={()=>this.toggleDone(item) }
              />
            </td>
            </tr>
        ))
  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {action:this.state.newTodo,done:false},
      ],
    })
  }
  render() {
    <Navbar name={this.state.userName}/>
      return (
        <>
         
              <div className={styles.container2}>
                  <input
                      className={styles.container3}
                      value={this.state.newTodo}
                      onChange={this.updateValue}

            />
            <br />
            <button onClick={this.newTodo}>Add ToDo</button>
                  
              </div>
          <div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </>
      );
  }
}
export default Home;
