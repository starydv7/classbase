import styles from "../src/components/home.module.css";
import './App.css';
import Home from "./classbase/Home";

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <h2>Todo List</h2>
       <Home/>
      </div>
    </div>
  );
}

export default App;
