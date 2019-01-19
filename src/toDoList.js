import React from "react";
import ReactDOM from "react-dom";

import "./layout.css";
class Menu extends React.Component {
  render() {}
}

export default class ToDoList extends React.Component {
  render() {
    return (
      <div className="list-container">
        <Menu />
        <p>THIS IS A CONTAINER FOR LIST </p>
      </div>
    );
  }
}
