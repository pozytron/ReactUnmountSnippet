import React from "react";
import ReactDOM from "react-dom";

import "./layout.css";
class Menu extends React.Component {
  handleClick = () => {
    if (typeof this.props.onUnmount === "function") {
      console.log("dasdasd");
    }
  };
  render() {
    return (
      <nav>
        <button>Dodaj</button>
        <button>Usuń</button>
        <button>Edytuj</button>
        <button onClick={this.handleClick}>Odmontuj</button>
      </nav>
    );
  }
}

export default class ToDoList extends React.Component {
  unmountCallback = () => {};
  render() {
    return (
      <div className="list-container">
        <Menu onUnmount={() => this.unmountCallback()} />
        <p>THIS IS A CONTAINER FOR LIST </p>
      </div>
    );
  }
}
