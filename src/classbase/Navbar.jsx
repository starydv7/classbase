import React, { Component } from "react";
import styles from "../components/home.module.css";
export class Navbar extends Component {
  render = () => (
    <div className={styles.container1}>
      <h2> {this.props.name}'s todo list</h2>
      {/* <button onClick={this.changeState}>Change</button> */}
    </div>
  );
}