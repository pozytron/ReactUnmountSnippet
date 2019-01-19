import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./toDoList";

import "./styles.css";
import itemList from "./itemList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, this is a TodoList!</h1>
        <ToDoList data={itemList} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
